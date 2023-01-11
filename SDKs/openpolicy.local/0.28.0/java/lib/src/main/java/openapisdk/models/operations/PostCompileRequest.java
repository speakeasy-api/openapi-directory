package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCompileRequest {
    public PostCompileQueryParams queryParams;
    public PostCompileRequest withQueryParams(PostCompileQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostCompileRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}