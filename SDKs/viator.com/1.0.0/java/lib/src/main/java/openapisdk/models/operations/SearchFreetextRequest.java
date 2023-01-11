package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchFreetextRequest {
    public SearchFreetextHeaders headers;
    public SearchFreetextRequest withHeaders(SearchFreetextHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SearchFreetextRequestBody request;
    public SearchFreetextRequest withRequest(SearchFreetextRequestBody request) {
        this.request = request;
        return this;
    }
}