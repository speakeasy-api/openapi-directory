package operations

import (
	"openapi/pkg/models/shared"
)

var CancelBookingQuoteServerList = []string{
	"https://api.sandbox.viator.com/partner",
}

type CancelBookingQuotePathParams struct {
	BookingReference string `pathParam:"style=simple,explode=false,name=booking-reference"`
}

type CancelBookingQuoteRequest struct {
	ServerURL  *string
	PathParams CancelBookingQuotePathParams
}

type CancelBookingQuoteResponse struct {
	FourHundredAndOneUNAUTHORIZED         *shared.FourHundredAndOneUnauthorized
	FourHundredAndSixNOTACCEPTABLE        *shared.FourHundredAndSixNotAcceptable
	FiveHundredINTERNALSERVERERROR        *shared.FiveHundredInternalServerError
	FiveHundredAndThreeSERVICEUNAVAILABLE *shared.FiveHundredAndThreeServiceUnavailable
	CancelBookingQuoteResponse            *shared.CancelBookingQuoteResponse
	ContentType                           string
	StatusCode                            int64
}
