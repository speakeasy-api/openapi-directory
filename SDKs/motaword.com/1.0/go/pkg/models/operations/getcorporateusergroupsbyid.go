package operations

import (
	"openapi/pkg/models/shared"
)

type GetCorporateUserGroupsByIDPathParams struct {
	CorporateID int64 `pathParam:"style=simple,explode=false,name=corporateId"`
}

type GetCorporateUserGroupsByIDRequest struct {
	PathParams GetCorporateUserGroupsByIDPathParams
}

type GetCorporateUserGroupsByIDResponse struct {
	ContentType   string
	StatusCode    int64
	UserGroupList *shared.UserGroupList
}
