package openapisdk.models.operations;



public class ListVerificationAttemptRequest {
    public String serverURL;
    public ListVerificationAttemptRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListVerificationAttemptQueryParams queryParams;
    public ListVerificationAttemptRequest withQueryParams(ListVerificationAttemptQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListVerificationAttemptSecurity security;
    public ListVerificationAttemptRequest withSecurity(ListVerificationAttemptSecurity security) {
        this.security = security;
        return this;
    }
}