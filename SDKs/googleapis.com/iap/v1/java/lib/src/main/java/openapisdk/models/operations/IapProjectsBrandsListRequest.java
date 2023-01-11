package openapisdk.models.operations;



public class IapProjectsBrandsListRequest {
    public IapProjectsBrandsListPathParams pathParams;
    public IapProjectsBrandsListRequest withPathParams(IapProjectsBrandsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IapProjectsBrandsListQueryParams queryParams;
    public IapProjectsBrandsListRequest withQueryParams(IapProjectsBrandsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public IapProjectsBrandsListSecurity security;
    public IapProjectsBrandsListRequest withSecurity(IapProjectsBrandsListSecurity security) {
        this.security = security;
        return this;
    }
}