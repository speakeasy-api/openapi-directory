package operations

import (
	"openapi/pkg/models/shared"
)

var FetchPhoneNumberServerList = []string{
	"https://lookups.twilio.com",
}

type FetchPhoneNumberPathParams struct {
	PhoneNumber string `pathParam:"style=simple,explode=false,name=PhoneNumber"`
}

type FetchPhoneNumberQueryParams struct {
	AddressCountryCode *string `queryParam:"style=form,explode=true,name=AddressCountryCode"`
	AddressLine1       *string `queryParam:"style=form,explode=true,name=AddressLine1"`
	AddressLine2       *string `queryParam:"style=form,explode=true,name=AddressLine2"`
	City               *string `queryParam:"style=form,explode=true,name=City"`
	CountryCode        *string `queryParam:"style=form,explode=true,name=CountryCode"`
	DateOfBirth        *string `queryParam:"style=form,explode=true,name=DateOfBirth"`
	Fields             *string `queryParam:"style=form,explode=true,name=Fields"`
	FirstName          *string `queryParam:"style=form,explode=true,name=FirstName"`
	LastName           *string `queryParam:"style=form,explode=true,name=LastName"`
	NationalID         *string `queryParam:"style=form,explode=true,name=NationalId"`
	PostalCode         *string `queryParam:"style=form,explode=true,name=PostalCode"`
	State              *string `queryParam:"style=form,explode=true,name=State"`
}

type FetchPhoneNumberSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchPhoneNumberRequest struct {
	ServerURL   *string
	PathParams  FetchPhoneNumberPathParams
	QueryParams FetchPhoneNumberQueryParams
	Security    FetchPhoneNumberSecurity
}

type FetchPhoneNumberResponse struct {
	ContentType          string
	StatusCode           int64
	LookupsV2PhoneNumber *shared.LookupsV2PhoneNumber
}
