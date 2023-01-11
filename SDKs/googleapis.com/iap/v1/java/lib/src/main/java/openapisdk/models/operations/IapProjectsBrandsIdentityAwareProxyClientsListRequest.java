package openapisdk.models.operations;



public class IapProjectsBrandsIdentityAwareProxyClientsListRequest {
    public IapProjectsBrandsIdentityAwareProxyClientsListPathParams pathParams;
    public IapProjectsBrandsIdentityAwareProxyClientsListRequest withPathParams(IapProjectsBrandsIdentityAwareProxyClientsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IapProjectsBrandsIdentityAwareProxyClientsListQueryParams queryParams;
    public IapProjectsBrandsIdentityAwareProxyClientsListRequest withQueryParams(IapProjectsBrandsIdentityAwareProxyClientsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public IapProjectsBrandsIdentityAwareProxyClientsListSecurity security;
    public IapProjectsBrandsIdentityAwareProxyClientsListRequest withSecurity(IapProjectsBrandsIdentityAwareProxyClientsListSecurity security) {
        this.security = security;
        return this;
    }
}