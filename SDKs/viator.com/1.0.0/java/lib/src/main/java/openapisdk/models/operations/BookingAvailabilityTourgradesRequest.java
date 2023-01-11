package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BookingAvailabilityTourgradesRequest {
    public BookingAvailabilityTourgradesHeaders headers;
    public BookingAvailabilityTourgradesRequest withHeaders(BookingAvailabilityTourgradesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BookingAvailabilityTourgradesRequestBody request;
    public BookingAvailabilityTourgradesRequest withRequest(BookingAvailabilityTourgradesRequestBody request) {
        this.request = request;
        return this;
    }
}