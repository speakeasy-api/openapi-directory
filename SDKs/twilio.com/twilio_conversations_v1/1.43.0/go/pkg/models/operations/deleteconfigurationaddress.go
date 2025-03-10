// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

var DeleteConfigurationAddressServerList = []string{
	"https://conversations.twilio.com",
}

type DeleteConfigurationAddressSecurity struct {
	Password string `security:"scheme,type=http,subtype=basic,name=password"`
	Username string `security:"scheme,type=http,subtype=basic,name=username"`
}

type DeleteConfigurationAddressRequest struct {
	// The SID of the Address Configuration resource. This value can be either the `sid` or the `address` of the configuration
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteConfigurationAddressResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
