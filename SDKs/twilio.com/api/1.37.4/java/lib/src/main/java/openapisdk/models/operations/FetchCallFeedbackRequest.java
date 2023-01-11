package openapisdk.models.operations;



public class FetchCallFeedbackRequest {
    public String serverURL;
    public FetchCallFeedbackRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchCallFeedbackPathParams pathParams;
    public FetchCallFeedbackRequest withPathParams(FetchCallFeedbackPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchCallFeedbackSecurity security;
    public FetchCallFeedbackRequest withSecurity(FetchCallFeedbackSecurity security) {
        this.security = security;
        return this;
    }
}