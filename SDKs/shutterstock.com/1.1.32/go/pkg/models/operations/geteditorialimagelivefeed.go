// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetEditorialImageLivefeedSecurity struct {
	Basic              *shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *string             `security:"scheme,type=oauth2,name=Authorization"`
}

type GetEditorialImageLivefeedRequest struct {
	// Returns only if the livefeed is available for distribution in a certain country
	Country string `queryParam:"style=form,explode=true,name=country"`
	// Editorial livefeed ID; must be an URI encoded string
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetEditorialImageLivefeedResponse struct {
	ContentType string
	// OK
	EditorialImageLivefeed *shared.EditorialImageLivefeed
	StatusCode             int
	RawResponse            *http.Response
}
