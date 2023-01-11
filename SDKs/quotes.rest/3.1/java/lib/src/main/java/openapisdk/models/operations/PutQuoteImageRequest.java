package openapisdk.models.operations;



public class PutQuoteImageRequest {
    public PutQuoteImageQueryParams queryParams;
    public PutQuoteImageRequest withQueryParams(PutQuoteImageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PutQuoteImageSecurity security;
    public PutQuoteImageRequest withSecurity(PutQuoteImageSecurity security) {
        this.security = security;
        return this;
    }
}