package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IapProjectsBrandsIdentityAwareProxyClientsResetSecretRequest {
    public IapProjectsBrandsIdentityAwareProxyClientsResetSecretPathParams pathParams;
    public IapProjectsBrandsIdentityAwareProxyClientsResetSecretRequest withPathParams(IapProjectsBrandsIdentityAwareProxyClientsResetSecretPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IapProjectsBrandsIdentityAwareProxyClientsResetSecretQueryParams queryParams;
    public IapProjectsBrandsIdentityAwareProxyClientsResetSecretRequest withQueryParams(IapProjectsBrandsIdentityAwareProxyClientsResetSecretQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public IapProjectsBrandsIdentityAwareProxyClientsResetSecretRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public IapProjectsBrandsIdentityAwareProxyClientsResetSecretSecurity security;
    public IapProjectsBrandsIdentityAwareProxyClientsResetSecretRequest withSecurity(IapProjectsBrandsIdentityAwareProxyClientsResetSecretSecurity security) {
        this.security = security;
        return this;
    }
}