package operations

import (
	"openapi/pkg/models/shared"
)

type SendSmsMultiRequest struct {
	Request shared.SmsRequest `request:"mediaType=application/json"`
}

type SendSmsMultiResponse struct {
	ContentType string
	Erreur      *shared.Erreur
	SMSReponse  *shared.SmsReponse
	StatusCode  int64
}
