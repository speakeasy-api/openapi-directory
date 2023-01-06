package operations

import (
	"openapi/pkg/models/shared"
)

type DowngradeUserProofreaderPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=userId"`
}

type DowngradeUserProofreaderSecurity struct {
	MwoAuth shared.SchemeMwoAuth `security:"scheme,type=oauth2"`
}

type DowngradeUserProofreaderRequest struct {
	PathParams DowngradeUserProofreaderPathParams
	Security   DowngradeUserProofreaderSecurity
}

type DowngradeUserProofreaderResponse struct {
	ContentType     string
	Error           *shared.Error
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
