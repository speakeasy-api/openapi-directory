package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BookingCalculatepriceRequest {
    public BookingCalculatepriceHeaders headers;
    public BookingCalculatepriceRequest withHeaders(BookingCalculatepriceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BookingCalculatepriceRequestBody request;
    public BookingCalculatepriceRequest withRequest(BookingCalculatepriceRequestBody request) {
        this.request = request;
        return this;
    }
}