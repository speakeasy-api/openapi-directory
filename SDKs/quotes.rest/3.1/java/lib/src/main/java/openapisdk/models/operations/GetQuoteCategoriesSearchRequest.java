package openapisdk.models.operations;



public class GetQuoteCategoriesSearchRequest {
    public GetQuoteCategoriesSearchQueryParams queryParams;
    public GetQuoteCategoriesSearchRequest withQueryParams(GetQuoteCategoriesSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetQuoteCategoriesSearchSecurity security;
    public GetQuoteCategoriesSearchRequest withSecurity(GetQuoteCategoriesSearchSecurity security) {
        this.security = security;
        return this;
    }
}