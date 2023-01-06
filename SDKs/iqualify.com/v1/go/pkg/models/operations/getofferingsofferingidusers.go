package operations

import (
	"openapi/pkg/models/shared"
)

type GetOfferingsOfferingIDUsersPathParams struct {
	OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
}

type GetOfferingsOfferingIDUsersQueryParams struct {
	Facilitators *shared.OfferingIDEnum1 `queryParam:"style=form,explode=true,name=facilitators"`
	Learners     *shared.OfferingIDEnum1 `queryParam:"style=form,explode=true,name=learners"`
	Markers      *shared.OfferingIDEnum1 `queryParam:"style=form,explode=true,name=markers"`
}

type GetOfferingsOfferingIDUsersRequest struct {
	PathParams  GetOfferingsOfferingIDUsersPathParams
	QueryParams GetOfferingsOfferingIDUsersQueryParams
}

type GetOfferingsOfferingIDUsersResponse struct {
	ContentType           string
	Error                 *shared.Error
	OfferingUserResponses []shared.OfferingUserResponse
	StatusCode            int64
}
