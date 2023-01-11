package openapisdk.models.operations;



public class GetQuoteImageSearchRequest {
    public GetQuoteImageSearchQueryParams queryParams;
    public GetQuoteImageSearchRequest withQueryParams(GetQuoteImageSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetQuoteImageSearchSecurity security;
    public GetQuoteImageSearchRequest withSecurity(GetQuoteImageSearchSecurity security) {
        this.security = security;
        return this;
    }
}