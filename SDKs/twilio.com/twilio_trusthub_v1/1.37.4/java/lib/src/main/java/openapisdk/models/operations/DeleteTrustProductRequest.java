package openapisdk.models.operations;



public class DeleteTrustProductRequest {
    public String serverURL;
    public DeleteTrustProductRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteTrustProductPathParams pathParams;
    public DeleteTrustProductRequest withPathParams(DeleteTrustProductPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteTrustProductSecurity security;
    public DeleteTrustProductRequest withSecurity(DeleteTrustProductSecurity security) {
        this.security = security;
        return this;
    }
}