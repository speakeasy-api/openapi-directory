package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BookingAvailabilityRequest {
    public BookingAvailabilityHeaders headers;
    public BookingAvailabilityRequest withHeaders(BookingAvailabilityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BookingAvailabilityRequestBody request;
    public BookingAvailabilityRequest withRequest(BookingAvailabilityRequestBody request) {
        this.request = request;
        return this;
    }
}