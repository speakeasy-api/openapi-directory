package openapisdk.models.operations;



public class CancelBookingResponse {
    public openapisdk.models.shared.FourHundredAndOneUnauthorized fourHundredAndOneUNAUTHORIZED;
    public CancelBookingResponse withFourHundredAndOneUnauthorized(openapisdk.models.shared.FourHundredAndOneUnauthorized fourHundredAndOneUNAUTHORIZED) {
        this.fourHundredAndOneUNAUTHORIZED = fourHundredAndOneUNAUTHORIZED;
        return this;
    }
    public openapisdk.models.shared.FourHundredAndSixNotAcceptable fourHundredAndSixNOTACCEPTABLE;
    public CancelBookingResponse withFourHundredAndSixNotAcceptable(openapisdk.models.shared.FourHundredAndSixNotAcceptable fourHundredAndSixNOTACCEPTABLE) {
        this.fourHundredAndSixNOTACCEPTABLE = fourHundredAndSixNOTACCEPTABLE;
        return this;
    }
    public openapisdk.models.shared.FiveHundredInternalServerError fiveHundredINTERNALSERVERERROR;
    public CancelBookingResponse withFiveHundredInternalServerError(openapisdk.models.shared.FiveHundredInternalServerError fiveHundredINTERNALSERVERERROR) {
        this.fiveHundredINTERNALSERVERERROR = fiveHundredINTERNALSERVERERROR;
        return this;
    }
    public openapisdk.models.shared.FiveHundredAndThreeServiceUnavailable fiveHundredAndThreeSERVICEUNAVAILABLE;
    public CancelBookingResponse withFiveHundredAndThreeServiceUnavailable(openapisdk.models.shared.FiveHundredAndThreeServiceUnavailable fiveHundredAndThreeSERVICEUNAVAILABLE) {
        this.fiveHundredAndThreeSERVICEUNAVAILABLE = fiveHundredAndThreeSERVICEUNAVAILABLE;
        return this;
    }
    public openapisdk.models.shared.CancelBookingResponse cancelBookingResponse;
    public CancelBookingResponse withCancelBookingResponse(openapisdk.models.shared.CancelBookingResponse cancelBookingResponse) {
        this.cancelBookingResponse = cancelBookingResponse;
        return this;
    }
    public String contentType;
    public CancelBookingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CancelBookingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CancelBooking400ApplicationJson cancelBooking400ApplicationJSONObject;
    public CancelBookingResponse withCancelBooking400ApplicationJsonObject(CancelBooking400ApplicationJson cancelBooking400ApplicationJSONObject) {
        this.cancelBooking400ApplicationJSONObject = cancelBooking400ApplicationJSONObject;
        return this;
    }
    public CancelBooking404ApplicationJson cancelBooking404ApplicationJSONObject;
    public CancelBookingResponse withCancelBooking404ApplicationJsonObject(CancelBooking404ApplicationJson cancelBooking404ApplicationJSONObject) {
        this.cancelBooking404ApplicationJSONObject = cancelBooking404ApplicationJSONObject;
        return this;
    }
}