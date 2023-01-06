package operations

import (
	"openapi/pkg/models/shared"
)

type SaveCorporateUserGroupByIDPathParams struct {
	CorporateID int64 `pathParam:"style=simple,explode=false,name=corporateId"`
}

type SaveCorporateUserGroupByIDRequest struct {
	PathParams SaveCorporateUserGroupByIDPathParams
	Request    shared.UserGroup `request:"mediaType=application/json"`
}

type SaveCorporateUserGroupByIDResponse struct {
	ContentType string
	StatusCode  int64
	UserGroup   *shared.UserGroup
}
