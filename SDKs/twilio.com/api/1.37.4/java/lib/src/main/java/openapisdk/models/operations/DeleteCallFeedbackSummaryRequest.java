package openapisdk.models.operations;



public class DeleteCallFeedbackSummaryRequest {
    public String serverURL;
    public DeleteCallFeedbackSummaryRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteCallFeedbackSummaryPathParams pathParams;
    public DeleteCallFeedbackSummaryRequest withPathParams(DeleteCallFeedbackSummaryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteCallFeedbackSummarySecurity security;
    public DeleteCallFeedbackSummaryRequest withSecurity(DeleteCallFeedbackSummarySecurity security) {
        this.security = security;
        return this;
    }
}