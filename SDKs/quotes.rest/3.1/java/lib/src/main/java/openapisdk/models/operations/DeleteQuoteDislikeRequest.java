package openapisdk.models.operations;



public class DeleteQuoteDislikeRequest {
    public DeleteQuoteDislikeQueryParams queryParams;
    public DeleteQuoteDislikeRequest withQueryParams(DeleteQuoteDislikeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteQuoteDislikeSecurity security;
    public DeleteQuoteDislikeRequest withSecurity(DeleteQuoteDislikeSecurity security) {
        this.security = security;
        return this;
    }
}