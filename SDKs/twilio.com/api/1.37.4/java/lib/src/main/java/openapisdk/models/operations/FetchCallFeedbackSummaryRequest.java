package openapisdk.models.operations;



public class FetchCallFeedbackSummaryRequest {
    public String serverURL;
    public FetchCallFeedbackSummaryRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchCallFeedbackSummaryPathParams pathParams;
    public FetchCallFeedbackSummaryRequest withPathParams(FetchCallFeedbackSummaryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchCallFeedbackSummarySecurity security;
    public FetchCallFeedbackSummaryRequest withSecurity(FetchCallFeedbackSummarySecurity security) {
        this.security = security;
        return this;
    }
}