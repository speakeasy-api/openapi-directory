package openapisdk.models.operations;



public class IapProjectsBrandsIdentityAwareProxyClientsListResponse {
    public String contentType;
    public IapProjectsBrandsIdentityAwareProxyClientsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListIdentityAwareProxyClientsResponse listIdentityAwareProxyClientsResponse;
    public IapProjectsBrandsIdentityAwareProxyClientsListResponse withListIdentityAwareProxyClientsResponse(openapisdk.models.shared.ListIdentityAwareProxyClientsResponse listIdentityAwareProxyClientsResponse) {
        this.listIdentityAwareProxyClientsResponse = listIdentityAwareProxyClientsResponse;
        return this;
    }
    public Long statusCode;
    public IapProjectsBrandsIdentityAwareProxyClientsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}