package openapisdk.models.operations;



public class FetchVerificationAttemptRequest {
    public String serverURL;
    public FetchVerificationAttemptRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchVerificationAttemptPathParams pathParams;
    public FetchVerificationAttemptRequest withPathParams(FetchVerificationAttemptPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchVerificationAttemptSecurity security;
    public FetchVerificationAttemptRequest withSecurity(FetchVerificationAttemptSecurity security) {
        this.security = security;
        return this;
    }
}