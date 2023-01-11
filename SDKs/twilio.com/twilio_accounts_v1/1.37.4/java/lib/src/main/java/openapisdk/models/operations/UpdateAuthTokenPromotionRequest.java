package openapisdk.models.operations;



public class UpdateAuthTokenPromotionRequest {
    public String serverURL;
    public UpdateAuthTokenPromotionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateAuthTokenPromotionSecurity security;
    public UpdateAuthTokenPromotionRequest withSecurity(UpdateAuthTokenPromotionSecurity security) {
        this.security = security;
        return this;
    }
}