package operations

import (
	"openapi/pkg/models/shared"
)

type GetListOfJobsQueryParams struct {
	Limit         *int64  `queryParam:"style=form,explode=true,name=limit"`
	StartingAfter *string `queryParam:"style=form,explode=true,name=starting_after"`
}

// GetListOfJobs400ApplicationProblemPlusJSON
// Problem details object returned on errors
type GetListOfJobs400ApplicationProblemPlusJSON struct {
	Parameters map[string]interface{} `json:"parameters,omitempty"`
	Status     *int64                 `json:"status,omitempty"`
	Title      *string                `json:"title,omitempty"`
	Type       *string                `json:"type,omitempty"`
}

type GetListOfJobsRequest struct {
	QueryParams GetListOfJobsQueryParams
}

type GetListOfJobsResponse struct {
	ContentType                                      string
	GetListOfJobs400ApplicationProblemPlusJSONObject *GetListOfJobs400ApplicationProblemPlusJSON
	GetListOfJobs401ApplicationProblemPlusJSONAny    *interface{}
	Jobs                                             []shared.Job
	StatusCode                                       int64
}
