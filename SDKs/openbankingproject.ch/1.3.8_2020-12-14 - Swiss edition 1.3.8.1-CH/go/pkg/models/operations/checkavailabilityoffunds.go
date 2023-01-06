package operations

import (
	"openapi/pkg/models/shared"
)

type CheckAvailabilityOfFundsHeaders struct {
	Authorization           *string `header:"style=simple,explode=false,name=Authorization"`
	Digest                  *string `header:"style=simple,explode=false,name=Digest"`
	Signature               *string `header:"style=simple,explode=false,name=Signature"`
	TPPSignatureCertificate *string `header:"style=simple,explode=false,name=TPP-Signature-Certificate"`
	XRequestID              string  `header:"style=simple,explode=false,name=X-Request-ID"`
}

type CheckAvailabilityOfFundsSecurity struct {
	BearerAuthOAuth *shared.SchemeBearerAuthOAuth `security:"scheme,type=http,subtype=bearer"`
}

// CheckAvailabilityOfFunds200ApplicationJSON
// Equals "true" if sufficient funds are available at the time of the request,
// "false" otherwise.
type CheckAvailabilityOfFunds200ApplicationJSON struct {
	FundsAvailable bool `json:"fundsAvailable"`
}

type CheckAvailabilityOfFundsRequest struct {
	Headers  CheckAvailabilityOfFundsHeaders
	Request  shared.ConfirmationOfFunds `request:"mediaType=application/json"`
	Security CheckAvailabilityOfFundsSecurity
}

type CheckAvailabilityOfFundsResponse struct {
	ContentType                                      string
	Error400AIS                                      *shared.Error400Ais
	Error400NGAIS                                    *shared.Error400NgAis
	Error401NGPIIS                                   *shared.Error401NgPiis
	Error401PIIS                                     *shared.Error401Piis
	Error403NGPIIS                                   *shared.Error403NgPiis
	Error403PIIS                                     *shared.Error403Piis
	Error404NGPIIS                                   *shared.Error404NgPiis
	Error404PIIS                                     *shared.Error404Piis
	Error405NGPIIS                                   *shared.Error405NgPiis
	Error405PIIS                                     *shared.Error405Piis
	Error409NGPIIS                                   *shared.Error409NgPiis
	Error409PIIS                                     *shared.Error409Piis
	Headers                                          map[string][]string
	StatusCode                                       int64
	CheckAvailabilityOfFunds200ApplicationJSONObject *CheckAvailabilityOfFunds200ApplicationJSON
}
