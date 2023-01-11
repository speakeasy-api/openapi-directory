package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PublishAttractionRequest {
    public PublishAttractionHeaders headers;
    public PublishAttractionRequest withHeaders(PublishAttractionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Attraction request;
    public PublishAttractionRequest withRequest(openapisdk.models.shared.Attraction request) {
        this.request = request;
        return this;
    }
}