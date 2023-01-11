package openapisdk.models.operations;



public class IapProjectsBrandsIdentityAwareProxyClientsResetSecretResponse {
    public String contentType;
    public IapProjectsBrandsIdentityAwareProxyClientsResetSecretResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.IdentityAwareProxyClient identityAwareProxyClient;
    public IapProjectsBrandsIdentityAwareProxyClientsResetSecretResponse withIdentityAwareProxyClient(openapisdk.models.shared.IdentityAwareProxyClient identityAwareProxyClient) {
        this.identityAwareProxyClient = identityAwareProxyClient;
        return this;
    }
    public Long statusCode;
    public IapProjectsBrandsIdentityAwareProxyClientsResetSecretResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}