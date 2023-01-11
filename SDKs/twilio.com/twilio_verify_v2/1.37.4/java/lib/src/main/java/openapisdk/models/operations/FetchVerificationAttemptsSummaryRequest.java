package openapisdk.models.operations;



public class FetchVerificationAttemptsSummaryRequest {
    public String serverURL;
    public FetchVerificationAttemptsSummaryRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchVerificationAttemptsSummaryQueryParams queryParams;
    public FetchVerificationAttemptsSummaryRequest withQueryParams(FetchVerificationAttemptsSummaryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FetchVerificationAttemptsSummarySecurity security;
    public FetchVerificationAttemptsSummaryRequest withSecurity(FetchVerificationAttemptsSummarySecurity security) {
        this.security = security;
        return this;
    }
}