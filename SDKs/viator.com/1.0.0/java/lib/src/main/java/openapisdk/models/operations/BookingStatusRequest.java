package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BookingStatusRequest {
    public BookingStatusHeaders headers;
    public BookingStatusRequest withHeaders(BookingStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BookingStatusRequestBody request;
    public BookingStatusRequest withRequest(BookingStatusRequestBody request) {
        this.request = request;
        return this;
    }
}