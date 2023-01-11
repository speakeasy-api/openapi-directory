package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPhoneEnrichRequest {
    public PostPhoneEnrichHeaders headers;
    public PostPhoneEnrichRequest withHeaders(PostPhoneEnrichHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostPhoneEnrichRequestBody request;
    public PostPhoneEnrichRequest withRequest(PostPhoneEnrichRequestBody request) {
        this.request = request;
        return this;
    }
}