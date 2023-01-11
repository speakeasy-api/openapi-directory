package openapisdk.models.operations;



public class GetQuoteImageBackgroundSearchRequest {
    public GetQuoteImageBackgroundSearchQueryParams queryParams;
    public GetQuoteImageBackgroundSearchRequest withQueryParams(GetQuoteImageBackgroundSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetQuoteImageBackgroundSearchSecurity security;
    public GetQuoteImageBackgroundSearchRequest withSecurity(GetQuoteImageBackgroundSearchSecurity security) {
        this.security = security;
        return this;
    }
}