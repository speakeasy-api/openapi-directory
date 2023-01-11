package openapisdk.models.operations;



public class ListImageCategoriesRequest {
    public ListImageCategoriesQueryParams queryParams;
    public ListImageCategoriesRequest withQueryParams(ListImageCategoriesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListImageCategoriesSecurity security;
    public ListImageCategoriesRequest withSecurity(ListImageCategoriesSecurity security) {
        this.security = security;
        return this;
    }
}