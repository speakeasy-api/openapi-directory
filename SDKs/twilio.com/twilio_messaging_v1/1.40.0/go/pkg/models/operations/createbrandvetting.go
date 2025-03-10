// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

var CreateBrandVettingServerList = []string{
	"https://messaging.twilio.com",
}

type CreateBrandVettingSecurity struct {
	Password string `security:"scheme,type=http,subtype=basic,name=password"`
	Username string `security:"scheme,type=http,subtype=basic,name=username"`
}

type CreateBrandVettingCreateBrandVettingRequest struct {
	// The unique ID of the vetting
	VettingID       *string                                    `form:"name=VettingId"`
	VettingProvider shared.BrandVettingEnumVettingProviderEnum `form:"name=VettingProvider"`
}

type CreateBrandVettingRequest struct {
	// The SID of the Brand Registration resource of the vettings to create .
	BrandSid    string                                       `pathParam:"style=simple,explode=false,name=BrandSid"`
	RequestBody *CreateBrandVettingCreateBrandVettingRequest `request:"mediaType=application/x-www-form-urlencoded"`
}

type CreateBrandVettingResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Created
	MessagingV1BrandRegistrationsBrandVetting *shared.MessagingV1BrandRegistrationsBrandVetting
}
