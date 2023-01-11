package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCallFeedbackRequest {
    public String serverURL;
    public UpdateCallFeedbackRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateCallFeedbackPathParams pathParams;
    public UpdateCallFeedbackRequest withPathParams(UpdateCallFeedbackPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateCallFeedbackUpdateCallFeedbackRequest request;
    public UpdateCallFeedbackRequest withRequest(UpdateCallFeedbackUpdateCallFeedbackRequest request) {
        this.request = request;
        return this;
    }
    public UpdateCallFeedbackSecurity security;
    public UpdateCallFeedbackRequest withSecurity(UpdateCallFeedbackSecurity security) {
        this.security = security;
        return this;
    }
}