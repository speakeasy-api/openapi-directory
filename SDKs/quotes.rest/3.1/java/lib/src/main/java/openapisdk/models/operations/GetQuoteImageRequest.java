package openapisdk.models.operations;



public class GetQuoteImageRequest {
    public GetQuoteImageQueryParams queryParams;
    public GetQuoteImageRequest withQueryParams(GetQuoteImageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetQuoteImageSecurity security;
    public GetQuoteImageRequest withSecurity(GetQuoteImageSecurity security) {
        this.security = security;
        return this;
    }
}