package openapisdk.models.operations;



public class PatchDpsMessageRequest {
    public PatchDpsMessagePathParams pathParams;
    public PatchDpsMessageRequest withPathParams(PatchDpsMessagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatchDpsMessageHeaders headers;
    public PatchDpsMessageRequest withHeaders(PatchDpsMessageHeaders headers) {
        this.headers = headers;
        return this;
    }
}