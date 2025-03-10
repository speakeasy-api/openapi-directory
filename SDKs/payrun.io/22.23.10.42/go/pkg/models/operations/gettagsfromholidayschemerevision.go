// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

type GetTagsFromHolidaySchemeRevisionRequest struct {
	// The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.
	APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
	// The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
	// The effective date to be applied. E.g 2016-04-06
	EffectiveDate types.Date `pathParam:"style=simple,explode=false,name=EffectiveDate"`
	// The employers' unique identifier. E.g ER001
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
	// The holiday schemes' unique identifier. E.g HOLSCH001
	HolidaySchemeID string `pathParam:"style=simple,explode=false,name=HolidaySchemeId"`
}

type GetTagsFromHolidaySchemeRevisionResponse struct {
	ContentType string
	// Bad Request
	ErrorModel *shared.ErrorModel
	// The link collection object.
	LinkCollection *shared.LinkCollection
	StatusCode     int
	RawResponse    *http.Response
}
