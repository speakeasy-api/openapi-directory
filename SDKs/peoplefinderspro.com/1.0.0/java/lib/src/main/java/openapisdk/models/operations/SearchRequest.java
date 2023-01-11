package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchRequest {
    public SearchHeaders headers;
    public SearchRequest withHeaders(SearchHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SearchRequestBody request;
    public SearchRequest withRequest(SearchRequestBody request) {
        this.request = request;
        return this;
    }
}