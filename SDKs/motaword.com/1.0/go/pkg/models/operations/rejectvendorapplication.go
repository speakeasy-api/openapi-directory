package operations

import (
	"openapi/pkg/models/shared"
)

type RejectVendorApplicationPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=userId"`
}

type RejectVendorApplicationSecurity struct {
	MwoAuth shared.SchemeMwoAuth `security:"scheme,type=oauth2"`
}

type RejectVendorApplicationRequest struct {
	PathParams RejectVendorApplicationPathParams
	Security   RejectVendorApplicationSecurity
}

type RejectVendorApplicationResponse struct {
	ContentType     string
	Error           *shared.Error
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
