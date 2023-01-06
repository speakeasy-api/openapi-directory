package operations

import (
	"openapi/pkg/models/shared"
)

type GetCourseMappingsOfferingIDPathParams struct {
	OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
}

type GetCourseMappingsOfferingIDRequest struct {
	PathParams GetCourseMappingsOfferingIDPathParams
}

type GetCourseMappingsOfferingIDResponse struct {
	ContentType                                          string
	Error                                                *shared.Error
	StatusCode                                           int64
	GetCourseMappingsOfferingID200ApplicationJSONStrings []string
}
