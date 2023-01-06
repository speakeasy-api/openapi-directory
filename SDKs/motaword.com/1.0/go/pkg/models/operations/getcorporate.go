package operations

import (
	"openapi/pkg/models/shared"
)

type GetCorporateResponse struct {
	ContentType      string
	CorporateAccount *shared.CorporateAccount
	StatusCode       int64
}
