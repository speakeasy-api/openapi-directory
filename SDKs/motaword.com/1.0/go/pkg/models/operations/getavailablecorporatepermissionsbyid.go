package operations

import (
	"openapi/pkg/models/shared"
)

type GetAvailableCorporatePermissionsByIDPathParams struct {
	CorporateID int64 `pathParam:"style=simple,explode=false,name=corporateId"`
}

type GetAvailableCorporatePermissionsByIDRequest struct {
	PathParams GetAvailableCorporatePermissionsByIDPathParams
}

type GetAvailableCorporatePermissionsByIDResponse struct {
	ContentType    string
	PermissionList *shared.PermissionList
	StatusCode     int64
}
