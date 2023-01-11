package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostContactEnrichRequest {
    public PostContactEnrichHeaders headers;
    public PostContactEnrichRequest withHeaders(PostContactEnrichHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostContactEnrichRequestBody request;
    public PostContactEnrichRequest withRequest(PostContactEnrichRequestBody request) {
        this.request = request;
        return this;
    }
}