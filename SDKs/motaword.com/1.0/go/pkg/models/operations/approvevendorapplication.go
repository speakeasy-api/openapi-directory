package operations

import (
	"openapi/pkg/models/shared"
)

type ApproveVendorApplicationPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=userId"`
}

type ApproveVendorApplicationSecurity struct {
	MwoAuth shared.SchemeMwoAuth `security:"scheme,type=oauth2"`
}

type ApproveVendorApplicationRequest struct {
	PathParams ApproveVendorApplicationPathParams
	Security   ApproveVendorApplicationSecurity
}

type ApproveVendorApplicationResponse struct {
	ContentType     string
	Error           *shared.Error
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
