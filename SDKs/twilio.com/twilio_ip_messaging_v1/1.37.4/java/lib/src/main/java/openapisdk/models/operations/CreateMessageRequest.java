package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMessageRequest {
    public String serverURL;
    public CreateMessageRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateMessagePathParams pathParams;
    public CreateMessageRequest withPathParams(CreateMessagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateMessageCreateMessageRequest request;
    public CreateMessageRequest withRequest(CreateMessageCreateMessageRequest request) {
        this.request = request;
        return this;
    }
    public CreateMessageSecurity security;
    public CreateMessageRequest withSecurity(CreateMessageSecurity security) {
        this.security = security;
        return this;
    }
}