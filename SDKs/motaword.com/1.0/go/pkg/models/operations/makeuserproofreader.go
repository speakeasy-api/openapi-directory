package operations

import (
	"openapi/pkg/models/shared"
)

type MakeUserProofreaderPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=userId"`
}

type MakeUserProofreaderSecurity struct {
	MwoAuth shared.SchemeMwoAuth `security:"scheme,type=oauth2"`
}

type MakeUserProofreaderRequest struct {
	PathParams MakeUserProofreaderPathParams
	Security   MakeUserProofreaderSecurity
}

type MakeUserProofreaderResponse struct {
	ContentType     string
	Error           *shared.Error
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
