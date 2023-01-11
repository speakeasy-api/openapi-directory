package openapisdk.models.operations;



public class PostApiSocialNumberRequest {
    public PostApiSocialNumberQueryParams queryParams;
    public PostApiSocialNumberRequest withQueryParams(PostApiSocialNumberQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostApiSocialNumberHeaders headers;
    public PostApiSocialNumberRequest withHeaders(PostApiSocialNumberHeaders headers) {
        this.headers = headers;
        return this;
    }
    public PostApiSocialNumberRequests request;
    public PostApiSocialNumberRequest withRequest(PostApiSocialNumberRequests request) {
        this.request = request;
        return this;
    }
}