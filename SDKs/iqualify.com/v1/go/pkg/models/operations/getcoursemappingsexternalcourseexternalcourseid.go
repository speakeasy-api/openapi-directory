package operations

import (
	"openapi/pkg/models/shared"
)

type GetCourseMappingsExternalcourseExternalCourseIDPathParams struct {
	ExternalCourseID string `pathParam:"style=simple,explode=false,name=externalCourseId"`
}

type GetCourseMappingsExternalcourseExternalCourseIDRequest struct {
	PathParams GetCourseMappingsExternalcourseExternalCourseIDPathParams
}

type GetCourseMappingsExternalcourseExternalCourseIDResponse struct {
	ContentType                                                              string
	Error                                                                    *shared.Error
	StatusCode                                                               int64
	GetCourseMappingsExternalcourseExternalCourseID200ApplicationJSONStrings []string
}
