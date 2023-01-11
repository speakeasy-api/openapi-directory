package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BookingStatusItemsRequest {
    public BookingStatusItemsHeaders headers;
    public BookingStatusItemsRequest withHeaders(BookingStatusItemsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BookingStatusItemsRequestBody request;
    public BookingStatusItemsRequest withRequest(BookingStatusItemsRequestBody request) {
        this.request = request;
        return this;
    }
}