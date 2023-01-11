package openapisdk.models.operations;



public class PutDpsMessageRequest {
    public PutDpsMessagePathParams pathParams;
    public PutDpsMessageRequest withPathParams(PutDpsMessagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutDpsMessageHeaders headers;
    public PutDpsMessageRequest withHeaders(PutDpsMessageHeaders headers) {
        this.headers = headers;
        return this;
    }
}