package operations

import (
	"openapi/pkg/models/shared"
)

type SendUserEmailConfirmationPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=userId"`
}

type SendUserEmailConfirmationSecurity struct {
	MwoAuth shared.SchemeMwoAuth `security:"scheme,type=oauth2"`
}

type SendUserEmailConfirmation200ApplicationJSONStatusEnum string

const (
	SendUserEmailConfirmation200ApplicationJSONStatusEnumSuccess SendUserEmailConfirmation200ApplicationJSONStatusEnum = "success"
)

type SendUserEmailConfirmation200ApplicationJSON struct {
	Status *SendUserEmailConfirmation200ApplicationJSONStatusEnum `json:"status,omitempty"`
}

type SendUserEmailConfirmation202ApplicationJSONStatusEnum string

const (
	SendUserEmailConfirmation202ApplicationJSONStatusEnumAlreadyConfirmed SendUserEmailConfirmation202ApplicationJSONStatusEnum = "already_confirmed"
)

type SendUserEmailConfirmation202ApplicationJSON struct {
	Status *SendUserEmailConfirmation202ApplicationJSONStatusEnum `json:"status,omitempty"`
}

type SendUserEmailConfirmationRequest struct {
	PathParams SendUserEmailConfirmationPathParams
	Security   SendUserEmailConfirmationSecurity
}

type SendUserEmailConfirmationResponse struct {
	ContentType                                       string
	Error                                             *shared.Error
	StatusCode                                        int64
	SendUserEmailConfirmation200ApplicationJSONObject *SendUserEmailConfirmation200ApplicationJSON
	SendUserEmailConfirmation202ApplicationJSONObject *SendUserEmailConfirmation202ApplicationJSON
}
