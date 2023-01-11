package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IapProjectsBrandsIdentityAwareProxyClientsCreateRequest {
    public IapProjectsBrandsIdentityAwareProxyClientsCreatePathParams pathParams;
    public IapProjectsBrandsIdentityAwareProxyClientsCreateRequest withPathParams(IapProjectsBrandsIdentityAwareProxyClientsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IapProjectsBrandsIdentityAwareProxyClientsCreateQueryParams queryParams;
    public IapProjectsBrandsIdentityAwareProxyClientsCreateRequest withQueryParams(IapProjectsBrandsIdentityAwareProxyClientsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.IdentityAwareProxyClientInput request;
    public IapProjectsBrandsIdentityAwareProxyClientsCreateRequest withRequest(openapisdk.models.shared.IdentityAwareProxyClientInput request) {
        this.request = request;
        return this;
    }
    public IapProjectsBrandsIdentityAwareProxyClientsCreateSecurity security;
    public IapProjectsBrandsIdentityAwareProxyClientsCreateRequest withSecurity(IapProjectsBrandsIdentityAwareProxyClientsCreateSecurity security) {
        this.security = security;
        return this;
    }
}