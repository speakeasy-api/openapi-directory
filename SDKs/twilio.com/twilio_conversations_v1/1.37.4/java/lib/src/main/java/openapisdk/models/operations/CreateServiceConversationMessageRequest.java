package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateServiceConversationMessageRequest {
    public String serverURL;
    public CreateServiceConversationMessageRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateServiceConversationMessagePathParams pathParams;
    public CreateServiceConversationMessageRequest withPathParams(CreateServiceConversationMessagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateServiceConversationMessageHeaders headers;
    public CreateServiceConversationMessageRequest withHeaders(CreateServiceConversationMessageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateServiceConversationMessageCreateServiceConversationMessageRequest request;
    public CreateServiceConversationMessageRequest withRequest(CreateServiceConversationMessageCreateServiceConversationMessageRequest request) {
        this.request = request;
        return this;
    }
    public CreateServiceConversationMessageSecurity security;
    public CreateServiceConversationMessageRequest withSecurity(CreateServiceConversationMessageSecurity security) {
        this.security = security;
        return this;
    }
}