package openapisdk.models.operations;



public class GetQuoteSearchRequest {
    public GetQuoteSearchQueryParams queryParams;
    public GetQuoteSearchRequest withQueryParams(GetQuoteSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetQuoteSearchSecurity security;
    public GetQuoteSearchRequest withSecurity(GetQuoteSearchSecurity security) {
        this.security = security;
        return this;
    }
}