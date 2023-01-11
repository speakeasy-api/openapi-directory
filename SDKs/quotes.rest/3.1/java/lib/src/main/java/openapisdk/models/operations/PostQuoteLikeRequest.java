package openapisdk.models.operations;



public class PostQuoteLikeRequest {
    public PostQuoteLikeQueryParams queryParams;
    public PostQuoteLikeRequest withQueryParams(PostQuoteLikeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostQuoteLikeSecurity security;
    public PostQuoteLikeRequest withSecurity(PostQuoteLikeSecurity security) {
        this.security = security;
        return this;
    }
}