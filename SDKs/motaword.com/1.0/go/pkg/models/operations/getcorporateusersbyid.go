package operations

import (
	"openapi/pkg/models/shared"
)

type GetCorporateUsersByIDPathParams struct {
	CorporateID int64 `pathParam:"style=simple,explode=false,name=corporateId"`
}

type GetCorporateUsersByIDRequest struct {
	PathParams GetCorporateUsersByIDPathParams
}

type GetCorporateUsersByIDResponse struct {
	ContentType string
	StatusCode  int64
	UserList    *shared.UserList
}
