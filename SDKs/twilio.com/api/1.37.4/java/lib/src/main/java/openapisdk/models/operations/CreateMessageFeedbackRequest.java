package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMessageFeedbackRequest {
    public String serverURL;
    public CreateMessageFeedbackRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateMessageFeedbackPathParams pathParams;
    public CreateMessageFeedbackRequest withPathParams(CreateMessageFeedbackPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateMessageFeedbackCreateMessageFeedbackRequest request;
    public CreateMessageFeedbackRequest withRequest(CreateMessageFeedbackCreateMessageFeedbackRequest request) {
        this.request = request;
        return this;
    }
    public CreateMessageFeedbackSecurity security;
    public CreateMessageFeedbackRequest withSecurity(CreateMessageFeedbackSecurity security) {
        this.security = security;
        return this;
    }
}