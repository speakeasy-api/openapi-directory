package operations

import (
	"openapi/pkg/models/shared"
)

type GetProjectVendorsPathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=projectId"`
}

type GetProjectVendorsRequest struct {
	PathParams GetProjectVendorsPathParams
}

type GetProjectVendorsResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
	UserList    *shared.UserList
}
