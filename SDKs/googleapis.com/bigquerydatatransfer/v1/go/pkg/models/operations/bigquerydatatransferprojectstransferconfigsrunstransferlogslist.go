// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

type BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption1 struct {
	Oauth2  string `security:"scheme,type=oauth2,name=Authorization"`
	Oauth2c string `security:"scheme,type=oauth2,name=Authorization"`
}

type BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption2 struct {
	Oauth2  string `security:"scheme,type=oauth2,name=Authorization"`
	Oauth2c string `security:"scheme,type=oauth2,name=Authorization"`
}

type BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption3 struct {
	Oauth2  string `security:"scheme,type=oauth2,name=Authorization"`
	Oauth2c string `security:"scheme,type=oauth2,name=Authorization"`
}

type BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurity struct {
	Option1 *BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption1 `security:"option"`
	Option2 *BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption2 `security:"option"`
	Option3 *BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption3 `security:"option"`
}

type BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum string

const (
	BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnumMessageSeverityUnspecified BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum = "MESSAGE_SEVERITY_UNSPECIFIED"
	BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnumInfo                       BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum = "INFO"
	BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnumWarning                    BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum = "WARNING"
	BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnumError                      BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum = "ERROR"
)

func (e BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum) ToPointer() *BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum {
	return &e
}

func (e *BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "MESSAGE_SEVERITY_UNSPECIFIED":
		fallthrough
	case "INFO":
		fallthrough
	case "WARNING":
		fallthrough
	case "ERROR":
		*e = BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum: %v", v)
	}
}

type BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListRequest struct {
	// V1 error format.
	DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	// OAuth access token.
	AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
	// Data format for response.
	Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	// JSONP
	Callback *string `queryParam:"style=form,explode=true,name=callback"`
	// Selector specifying which fields to include in a partial response.
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
	// API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
	Key *string `queryParam:"style=form,explode=true,name=key"`
	// Message types to return. If not populated - INFO, WARNING and ERROR messages are returned.
	MessageTypes []BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum `queryParam:"style=form,explode=true,name=messageTypes"`
	// OAuth 2.0 token for the current user.
	OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
	// Page size. The default page size is the maximum value of 1000 results.
	PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
	// Pagination token, which can be used to request a specific page of `ListTransferLogsRequest` list results. For multiple-page results, `ListTransferLogsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
	PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
	// Required. Transfer run name in the form: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
	// Returns response with indentations and line breaks.
	PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
	// Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
	QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
	// Legacy upload protocol for media (e.g. "media", "multipart").
	UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
	// Upload protocol for media (e.g. "raw", "multipart").
	UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListResponse struct {
	ContentType string
	// Successful response
	ListTransferLogsResponse *shared.ListTransferLogsResponse
	StatusCode               int
	RawResponse              *http.Response
}
