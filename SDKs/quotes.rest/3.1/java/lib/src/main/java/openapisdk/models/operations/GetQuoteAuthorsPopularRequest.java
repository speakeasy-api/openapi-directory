package openapisdk.models.operations;



public class GetQuoteAuthorsPopularRequest {
    public GetQuoteAuthorsPopularQueryParams queryParams;
    public GetQuoteAuthorsPopularRequest withQueryParams(GetQuoteAuthorsPopularQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetQuoteAuthorsPopularSecurity security;
    public GetQuoteAuthorsPopularRequest withSecurity(GetQuoteAuthorsPopularSecurity security) {
        this.security = security;
        return this;
    }
}