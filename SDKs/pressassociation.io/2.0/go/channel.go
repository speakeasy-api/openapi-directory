package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
	"strings"
)

type Channel struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewChannel(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Channel {
	return &Channel{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetChannel - Channel Detail
// Return the content of the selected channel.
func (s *Channel) GetChannel(ctx context.Context, request operations.GetChannelRequest) (*operations.GetChannelResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/channel/{channelId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetChannelResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetChannel200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// ListChannels - Channel Collection
// If you are interested in a list of channels that have had there schedule updated you can filter by the following query params.
//   - scheduleStart
//   - scheduleEnd
//   - scheduleUpdatedSince
//
// adding these query params will filter the channel collection to only return channels that have been updated within the given range, updatedSince stores the state of your previous call.
//
// Example Usage: Every 10 minutes get me the channels that have updated schedules for the next 2 weeks.
//
// /channel?platform={uuid}&scheduleStart={today}&scheduleEnd={today + 2 weeks}&updatedSince={10 minutes ago}
//
// Also please note epg numbers are only exposed when a platform and region are passed to the query.
func (s *Channel) ListChannels(ctx context.Context, request operations.ListChannelsRequest) (*operations.ListChannelsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/channel"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ListChannelsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListChannels200ApplicationJSONObject = out
		}
	}

	return res, nil
}
