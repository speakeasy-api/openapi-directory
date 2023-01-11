package openapisdk.models.operations;



public class PostQuoteDislikeRequest {
    public PostQuoteDislikeQueryParams queryParams;
    public PostQuoteDislikeRequest withQueryParams(PostQuoteDislikeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostQuoteDislikeSecurity security;
    public PostQuoteDislikeRequest withSecurity(PostQuoteDislikeSecurity security) {
        this.security = security;
        return this;
    }
}