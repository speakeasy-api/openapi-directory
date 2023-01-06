package operations

import (
	"openapi/pkg/models/shared"
)

type GetJobByIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

// GetJobByID404ApplicationProblemPlusJSON
// Problem details object returned on errors
type GetJobByID404ApplicationProblemPlusJSON struct {
	Status *int64  `json:"status,omitempty"`
	Title  *string `json:"title,omitempty"`
	Type   *string `json:"type,omitempty"`
}

type GetJobByIDRequest struct {
	PathParams GetJobByIDPathParams
}

type GetJobByIDResponse struct {
	ContentType                                   string
	GetJobByID401ApplicationProblemPlusJSONAny    *interface{}
	GetJobByID404ApplicationProblemPlusJSONObject *GetJobByID404ApplicationProblemPlusJSON
	Job                                           *shared.Job
	StatusCode                                    int64
}
