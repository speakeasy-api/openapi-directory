package operations

import (
	"openapi/pkg/models/shared"
)

type GetAvailableCorporatePermissionsResponse struct {
	ContentType    string
	PermissionList *shared.PermissionList
	StatusCode     int64
}
