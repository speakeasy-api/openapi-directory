// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type RetrieveLoyaltyAccountSecurity struct {
	Oauth2 string `security:"scheme,type=oauth2,name=Authorization"`
}

type RetrieveLoyaltyAccountRequest struct {
	// The ID of the [loyalty account](https://developer.squareup.com/reference/square_2021-08-18/objects/LoyaltyAccount) to retrieve.
	AccountID string `pathParam:"style=simple,explode=false,name=account_id"`
}

type RetrieveLoyaltyAccountResponse struct {
	ContentType string
	// Success
	RetrieveLoyaltyAccountResponse *shared.RetrieveLoyaltyAccountResponse
	StatusCode                     int
	RawResponse                    *http.Response
}
