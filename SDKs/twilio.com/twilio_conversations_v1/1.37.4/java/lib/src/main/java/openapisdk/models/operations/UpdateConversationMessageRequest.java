package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConversationMessageRequest {
    public String serverURL;
    public UpdateConversationMessageRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateConversationMessagePathParams pathParams;
    public UpdateConversationMessageRequest withPathParams(UpdateConversationMessagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateConversationMessageHeaders headers;
    public UpdateConversationMessageRequest withHeaders(UpdateConversationMessageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateConversationMessageUpdateConversationMessageRequest request;
    public UpdateConversationMessageRequest withRequest(UpdateConversationMessageUpdateConversationMessageRequest request) {
        this.request = request;
        return this;
    }
    public UpdateConversationMessageSecurity security;
    public UpdateConversationMessageRequest withSecurity(UpdateConversationMessageSecurity security) {
        this.security = security;
        return this;
    }
}