package openapisdk.models.operations;



public class FetchTollfreeVerificationRequest {
    public String serverURL;
    public FetchTollfreeVerificationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchTollfreeVerificationPathParams pathParams;
    public FetchTollfreeVerificationRequest withPathParams(FetchTollfreeVerificationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchTollfreeVerificationSecurity security;
    public FetchTollfreeVerificationRequest withSecurity(FetchTollfreeVerificationSecurity security) {
        this.security = security;
        return this;
    }
}