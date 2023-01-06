package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserPermissionsPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=userId"`
}

type GetUserPermissionsRequest struct {
	PathParams GetUserPermissionsPathParams
}

type GetUserPermissionsResponse struct {
	ContentType    string
	PermissionList *shared.PermissionList
	StatusCode     int64
}
