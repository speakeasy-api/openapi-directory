package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEmailEnrichRequest {
    public PostEmailEnrichHeaders headers;
    public PostEmailEnrichRequest withHeaders(PostEmailEnrichHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostEmailEnrichRequestBody request;
    public PostEmailEnrichRequest withRequest(PostEmailEnrichRequestBody request) {
        this.request = request;
        return this;
    }
}