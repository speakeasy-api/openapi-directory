package openapisdk.models.operations;



public class DeleteSecondaryAuthTokenRequest {
    public String serverURL;
    public DeleteSecondaryAuthTokenRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteSecondaryAuthTokenSecurity security;
    public DeleteSecondaryAuthTokenRequest withSecurity(DeleteSecondaryAuthTokenSecurity security) {
        this.security = security;
        return this;
    }
}