package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BookingPricingmatrixRequest {
    public BookingPricingmatrixHeaders headers;
    public BookingPricingmatrixRequest withHeaders(BookingPricingmatrixHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BookingPricingmatrixRequestBody request;
    public BookingPricingmatrixRequest withRequest(BookingPricingmatrixRequestBody request) {
        this.request = request;
        return this;
    }
}