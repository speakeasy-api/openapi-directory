package operations

import (
	"openapi/pkg/models/shared"
)

type GetOfferingsOfferingIDAnalyticsPulsesPathParams struct {
	OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
}

type GetOfferingsOfferingIDAnalyticsPulsesRequest struct {
	PathParams GetOfferingsOfferingIDAnalyticsPulsesPathParams
}

type GetOfferingsOfferingIDAnalyticsPulsesResponse struct {
	ContentType                                                    string
	Error                                                          *shared.Error
	StatusCode                                                     int64
	GetOfferingsOfferingIDAnalyticsPulses200ApplicationJSONStrings []string
}
