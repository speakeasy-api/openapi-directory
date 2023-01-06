package operations

import (
	"openapi/pkg/models/shared"
)

type GetCorporateByIDPathParams struct {
	CorporateID int64 `pathParam:"style=simple,explode=false,name=corporateId"`
}

type GetCorporateByIDRequest struct {
	PathParams GetCorporateByIDPathParams
}

type GetCorporateByIDResponse struct {
	ContentType      string
	CorporateAccount *shared.CorporateAccount
	StatusCode       int64
}
