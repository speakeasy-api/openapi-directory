package openapisdk.models.operations;



public class IapProjectsBrandsIdentityAwareProxyClientsCreateResponse {
    public String contentType;
    public IapProjectsBrandsIdentityAwareProxyClientsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.IdentityAwareProxyClient identityAwareProxyClient;
    public IapProjectsBrandsIdentityAwareProxyClientsCreateResponse withIdentityAwareProxyClient(openapisdk.models.shared.IdentityAwareProxyClient identityAwareProxyClient) {
        this.identityAwareProxyClient = identityAwareProxyClient;
        return this;
    }
    public Long statusCode;
    public IapProjectsBrandsIdentityAwareProxyClientsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}