package operations

import (
	"openapi/pkg/models/shared"
)

type GetProjectPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetProjectWithEnum string

const (
	GetProjectWithEnumClient GetProjectWithEnum = "client"
	GetProjectWithEnumVendor GetProjectWithEnum = "vendor"
	GetProjectWithEnumScore  GetProjectWithEnum = "score"
)

type GetProjectQueryParams struct {
	With []GetProjectWithEnum `queryParam:"style=form,explode=true,name=with[]"`
}

type GetProjectRequest struct {
	PathParams  GetProjectPathParams
	QueryParams GetProjectQueryParams
}

type GetProjectResponse struct {
	ContentType string
	Error       *shared.Error
	Project     *shared.Project
	StatusCode  int64
}
