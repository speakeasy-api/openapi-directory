package openapisdk.models.operations;



public class FetchUserInfoRequest {
    public String serverURL;
    public FetchUserInfoRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchUserInfoSecurity security;
    public FetchUserInfoRequest withSecurity(FetchUserInfoSecurity security) {
        this.security = security;
        return this;
    }
}