package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
)

type Offers struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewOffers(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Offers {
	return &Offers{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// OffersLoungesByLocationGet - Lounges
// Lounge information
func (s *Offers) OffersLoungesByLocationGet(ctx context.Context, request operations.OffersLoungesByLocationGetRequest) (*operations.OffersLoungesByLocationGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/offers/lounges/{location}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.OffersLoungesByLocationGetResponse{
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

			res.OffersLoungesByLocationGet200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet - Seat Maps
// Cabin layout and seat characteristics.
func (s *Offers) OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet(ctx context.Context, request operations.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetRequest) (*operations.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/offers/seatmaps/{flightNumber}/{origin}/{destination}/{date}/{cabinClass}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetResponse{
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

			res.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet200ApplicationJSONObject = out
		}
	}

	return res, nil
}
