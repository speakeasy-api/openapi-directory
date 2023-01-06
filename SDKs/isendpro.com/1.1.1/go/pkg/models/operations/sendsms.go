package operations

import (
	"openapi/pkg/models/shared"
)

type SendSmsRequest struct {
	Request shared.SmsUniqueRequest `request:"mediaType=application/json"`
}

type SendSmsResponse struct {
	ContentType string
	Erreur      *shared.Erreur
	SMSReponse  *shared.SmsReponse
	StatusCode  int64
}
