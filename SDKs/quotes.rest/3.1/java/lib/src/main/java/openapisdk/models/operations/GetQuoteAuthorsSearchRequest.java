package openapisdk.models.operations;



public class GetQuoteAuthorsSearchRequest {
    public GetQuoteAuthorsSearchQueryParams queryParams;
    public GetQuoteAuthorsSearchRequest withQueryParams(GetQuoteAuthorsSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetQuoteAuthorsSearchSecurity security;
    public GetQuoteAuthorsSearchRequest withSecurity(GetQuoteAuthorsSearchSecurity security) {
        this.security = security;
        return this;
    }
}