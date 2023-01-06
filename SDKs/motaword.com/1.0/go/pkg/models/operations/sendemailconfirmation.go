package operations

type SendEmailConfirmation200ApplicationJSONStatusEnum string

const (
	SendEmailConfirmation200ApplicationJSONStatusEnumSuccess          SendEmailConfirmation200ApplicationJSONStatusEnum = "success"
	SendEmailConfirmation200ApplicationJSONStatusEnumAlreadyConfirmed SendEmailConfirmation200ApplicationJSONStatusEnum = "already_confirmed"
)

type SendEmailConfirmation200ApplicationJSON struct {
	Status *SendEmailConfirmation200ApplicationJSONStatusEnum `json:"status,omitempty"`
}

type SendEmailConfirmationResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	SendEmailConfirmation200ApplicationJSONObject *SendEmailConfirmation200ApplicationJSON
}
