package openapisdk.models.operations;



public class GetQuoteCategoriesPopularRequest {
    public GetQuoteCategoriesPopularQueryParams queryParams;
    public GetQuoteCategoriesPopularRequest withQueryParams(GetQuoteCategoriesPopularQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetQuoteCategoriesPopularSecurity security;
    public GetQuoteCategoriesPopularRequest withSecurity(GetQuoteCategoriesPopularSecurity security) {
        this.security = security;
        return this;
    }
}