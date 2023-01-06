package operations

import (
	"openapi/pkg/models/shared"
)

type ParseShipmentRequest struct {
	Request shared.ParseShipmentRequestBodyInput `request:"mediaType=application/json"`
}

type ParseShipmentResponse struct {
	ContentType               string
	StatusCode                int64
	ErrorResponseBody         *shared.ErrorResponseBody
	ParseShipmentResponseBody *shared.ParseShipmentResponseBody
}
