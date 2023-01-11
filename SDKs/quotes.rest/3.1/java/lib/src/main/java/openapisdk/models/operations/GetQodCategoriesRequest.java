package openapisdk.models.operations;



public class GetQodCategoriesRequest {
    public GetQodCategoriesQueryParams queryParams;
    public GetQodCategoriesRequest withQueryParams(GetQodCategoriesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetQodCategoriesSecurity security;
    public GetQodCategoriesRequest withSecurity(GetQodCategoriesSecurity security) {
        this.security = security;
        return this;
    }
}