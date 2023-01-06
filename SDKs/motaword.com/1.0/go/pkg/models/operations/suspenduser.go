package operations

import (
	"openapi/pkg/models/shared"
)

type SuspendUserPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=userId"`
}

type SuspendUserRequestBody struct {
	Reason *string `json:"reason,omitempty"`
}

type SuspendUserSecurity struct {
	MwoAuth shared.SchemeMwoAuth `security:"scheme,type=oauth2"`
}

type SuspendUserRequest struct {
	PathParams SuspendUserPathParams
	Request    *SuspendUserRequestBody `request:"mediaType=application/json"`
	Security   SuspendUserSecurity
}

type SuspendUserResponse struct {
	ContentType     string
	Error           *shared.Error
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
