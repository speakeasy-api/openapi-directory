package openapisdk.models.operations;



public class PostApiTextTransformRequest {
    public PostApiTextTransformQueryParams queryParams;
    public PostApiTextTransformRequest withQueryParams(PostApiTextTransformQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostApiTextTransformHeaders headers;
    public PostApiTextTransformRequest withHeaders(PostApiTextTransformHeaders headers) {
        this.headers = headers;
        return this;
    }
    public PostApiTextTransformRequests request;
    public PostApiTextTransformRequest withRequest(PostApiTextTransformRequests request) {
        this.request = request;
        return this;
    }
}