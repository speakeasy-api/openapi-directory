package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PublishVenueRequest {
    public PublishVenueHeaders headers;
    public PublishVenueRequest withHeaders(PublishVenueHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Venue request;
    public PublishVenueRequest withRequest(openapisdk.models.shared.Venue request) {
        this.request = request;
        return this;
    }
}