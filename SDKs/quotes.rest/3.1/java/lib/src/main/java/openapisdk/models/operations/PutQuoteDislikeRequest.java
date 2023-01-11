package openapisdk.models.operations;



public class PutQuoteDislikeRequest {
    public PutQuoteDislikeQueryParams queryParams;
    public PutQuoteDislikeRequest withQueryParams(PutQuoteDislikeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PutQuoteDislikeSecurity security;
    public PutQuoteDislikeRequest withSecurity(PutQuoteDislikeSecurity security) {
        this.security = security;
        return this;
    }
}