package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompileRequest {
    public CompilePathParams pathParams;
    public CompileRequest withPathParams(CompilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CompileQueryParams queryParams;
    public CompileRequest withQueryParams(CompileQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CompileHeaders headers;
    public CompileRequest withHeaders(CompileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CompileRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}