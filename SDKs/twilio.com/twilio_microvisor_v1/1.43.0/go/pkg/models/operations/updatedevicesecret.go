// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

var UpdateDeviceSecretServerList = []string{
	"https://microvisor.twilio.com",
}

type UpdateDeviceSecretSecurity struct {
	Password string `security:"scheme,type=http,subtype=basic,name=password"`
	Username string `security:"scheme,type=http,subtype=basic,name=username"`
}

type UpdateDeviceSecretUpdateDeviceSecretRequest struct {
	// The secret value; up to 4096 characters.
	Value string `form:"name=Value"`
}

type UpdateDeviceSecretRequest struct {
	// A 34-character string that uniquely identifies the Device.
	DeviceSid string `pathParam:"style=simple,explode=false,name=DeviceSid"`
	// The secret key; up to 100 characters.
	Key         string                                       `pathParam:"style=simple,explode=false,name=Key"`
	RequestBody *UpdateDeviceSecretUpdateDeviceSecretRequest `request:"mediaType=application/x-www-form-urlencoded"`
}

type UpdateDeviceSecretResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// OK
	MicrovisorV1DeviceDeviceSecret *shared.MicrovisorV1DeviceDeviceSecret
}
