package openapisdk.models.operations;



public class PostDpsMessageRequest {
    public PostDpsMessagePathParams pathParams;
    public PostDpsMessageRequest withPathParams(PostDpsMessagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostDpsMessageHeaders headers;
    public PostDpsMessageRequest withHeaders(PostDpsMessageHeaders headers) {
        this.headers = headers;
        return this;
    }
}