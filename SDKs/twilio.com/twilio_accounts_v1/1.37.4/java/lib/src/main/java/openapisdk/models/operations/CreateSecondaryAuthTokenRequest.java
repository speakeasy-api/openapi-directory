package openapisdk.models.operations;



public class CreateSecondaryAuthTokenRequest {
    public String serverURL;
    public CreateSecondaryAuthTokenRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateSecondaryAuthTokenSecurity security;
    public CreateSecondaryAuthTokenRequest withSecurity(CreateSecondaryAuthTokenSecurity security) {
        this.security = security;
        return this;
    }
}