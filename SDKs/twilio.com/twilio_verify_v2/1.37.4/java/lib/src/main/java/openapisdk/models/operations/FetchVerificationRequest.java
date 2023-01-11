package openapisdk.models.operations;



public class FetchVerificationRequest {
    public String serverURL;
    public FetchVerificationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchVerificationPathParams pathParams;
    public FetchVerificationRequest withPathParams(FetchVerificationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchVerificationSecurity security;
    public FetchVerificationRequest withSecurity(FetchVerificationSecurity security) {
        this.security = security;
        return this;
    }
}