package openapisdk.models.operations;



public class CancelRequest {
    public CancelPathParams pathParams;
    public CancelRequest withPathParams(CancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CancelHeaders headers;
    public CancelRequest withHeaders(CancelHeaders headers) {
        this.headers = headers;
        return this;
    }
}