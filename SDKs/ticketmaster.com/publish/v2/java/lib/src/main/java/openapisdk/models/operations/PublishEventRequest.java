package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PublishEventRequest {
    public PublishEventHeaders headers;
    public PublishEventRequest withHeaders(PublishEventHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Event request;
    public PublishEventRequest withRequest(openapisdk.models.shared.Event request) {
        this.request = request;
        return this;
    }
}