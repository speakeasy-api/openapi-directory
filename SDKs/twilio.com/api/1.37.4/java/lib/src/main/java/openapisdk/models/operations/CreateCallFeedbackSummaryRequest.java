package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCallFeedbackSummaryRequest {
    public String serverURL;
    public CreateCallFeedbackSummaryRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateCallFeedbackSummaryPathParams pathParams;
    public CreateCallFeedbackSummaryRequest withPathParams(CreateCallFeedbackSummaryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequest request;
    public CreateCallFeedbackSummaryRequest withRequest(CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequest request) {
        this.request = request;
        return this;
    }
    public CreateCallFeedbackSummarySecurity security;
    public CreateCallFeedbackSummaryRequest withSecurity(CreateCallFeedbackSummarySecurity security) {
        this.security = security;
        return this;
    }
}