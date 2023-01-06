package operations

import (
	"openapi/pkg/models/shared"
)

type GetPermissionsResponse struct {
	ContentType    string
	PermissionList *shared.PermissionList
	StatusCode     int64
}
