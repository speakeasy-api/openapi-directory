// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

var CreateMediaProcessorServerList = []string{
	"https://media.twilio.com",
}

type CreateMediaProcessorSecurity struct {
	Password string `security:"scheme,type=http,subtype=basic,name=password"`
	Username string `security:"scheme,type=http,subtype=basic,name=username"`
}

// CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum - The HTTP method Twilio should use to call the `status_callback` URL. Can be `POST` or `GET` and the default is `POST`.
type CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum string

const (
	CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnumHead   CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum = "HEAD"
	CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnumGet    CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum = "GET"
	CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnumPost   CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum = "POST"
	CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnumPatch  CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum = "PATCH"
	CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnumPut    CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum = "PUT"
	CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnumDelete CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum = "DELETE"
)

func (e *CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum) UnmarshalJSON(data []byte) error {
	var s string
	if err := json.Unmarshal(data, &s); err != nil {
		return err
	}
	switch s {
	case "HEAD":
		fallthrough
	case "GET":
		fallthrough
	case "POST":
		fallthrough
	case "PATCH":
		fallthrough
	case "PUT":
		fallthrough
	case "DELETE":
		*e = CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum(s)
		return nil
	default:
		return fmt.Errorf("invalid value for CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum: %s", s)
	}
}

type CreateMediaProcessorCreateMediaProcessorRequest struct {
	// The [Media Extension](/docs/live/api/media-extensions-overview) name or URL. Ex: `video-composer-v2`
	Extension string `form:"name=Extension"`
	// The context of the Media Extension, represented as a JSON dictionary. See the documentation for the specific [Media Extension](/docs/live/api/media-extensions-overview) you are using for more information about the context to send.
	ExtensionContext string `form:"name=ExtensionContext"`
	// User-defined environment variables for the Media Extension, represented as a JSON dictionary of key/value strings. See the documentation for the specific [Media Extension](/docs/live/api/media-extensions-overview) you are using for more information about whether you need to provide this.
	ExtensionEnvironment interface{} `form:"name=ExtensionEnvironment"`
	// The maximum time, in seconds, that the MediaProcessor can run before automatically ends. The default value is 300 seconds, and the maximum value is 90000 seconds. Once this maximum duration is reached, Twilio will end the MediaProcessor, regardless of whether media is still streaming.
	MaxDuration *int64 `form:"name=MaxDuration"`
	// The URL to which Twilio will send asynchronous webhook requests for every MediaProcessor event. See [Status Callbacks](/docs/live/status-callbacks) for details.
	StatusCallback *string `form:"name=StatusCallback"`
	// The HTTP method Twilio should use to call the `status_callback` URL. Can be `POST` or `GET` and the default is `POST`.
	StatusCallbackMethod *CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum `form:"name=StatusCallbackMethod"`
}

type CreateMediaProcessorResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Created
	MediaV1MediaProcessor *shared.MediaV1MediaProcessor
}
