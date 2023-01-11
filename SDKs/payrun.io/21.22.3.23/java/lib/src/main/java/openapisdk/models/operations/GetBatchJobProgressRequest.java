package openapisdk.models.operations;



public class GetBatchJobProgressRequest {
    public GetBatchJobProgressPathParams pathParams;
    public GetBatchJobProgressRequest withPathParams(GetBatchJobProgressPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetBatchJobProgressHeaders headers;
    public GetBatchJobProgressRequest withHeaders(GetBatchJobProgressHeaders headers) {
        this.headers = headers;
        return this;
    }
}