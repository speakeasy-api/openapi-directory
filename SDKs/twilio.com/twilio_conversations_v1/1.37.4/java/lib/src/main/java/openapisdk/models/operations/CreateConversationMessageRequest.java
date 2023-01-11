package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateConversationMessageRequest {
    public String serverURL;
    public CreateConversationMessageRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateConversationMessagePathParams pathParams;
    public CreateConversationMessageRequest withPathParams(CreateConversationMessagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateConversationMessageHeaders headers;
    public CreateConversationMessageRequest withHeaders(CreateConversationMessageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateConversationMessageCreateConversationMessageRequest request;
    public CreateConversationMessageRequest withRequest(CreateConversationMessageCreateConversationMessageRequest request) {
        this.request = request;
        return this;
    }
    public CreateConversationMessageSecurity security;
    public CreateConversationMessageRequest withSecurity(CreateConversationMessageSecurity security) {
        this.security = security;
        return this;
    }
}