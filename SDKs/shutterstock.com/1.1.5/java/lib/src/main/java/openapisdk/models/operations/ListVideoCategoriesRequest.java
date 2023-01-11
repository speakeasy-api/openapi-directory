package openapisdk.models.operations;



public class ListVideoCategoriesRequest {
    public ListVideoCategoriesQueryParams queryParams;
    public ListVideoCategoriesRequest withQueryParams(ListVideoCategoriesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListVideoCategoriesSecurity security;
    public ListVideoCategoriesRequest withSecurity(ListVideoCategoriesSecurity security) {
        this.security = security;
        return this;
    }
}