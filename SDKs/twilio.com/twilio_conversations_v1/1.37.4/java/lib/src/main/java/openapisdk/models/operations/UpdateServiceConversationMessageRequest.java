package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceConversationMessageRequest {
    public String serverURL;
    public UpdateServiceConversationMessageRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateServiceConversationMessagePathParams pathParams;
    public UpdateServiceConversationMessageRequest withPathParams(UpdateServiceConversationMessagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateServiceConversationMessageHeaders headers;
    public UpdateServiceConversationMessageRequest withHeaders(UpdateServiceConversationMessageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateServiceConversationMessageUpdateServiceConversationMessageRequest request;
    public UpdateServiceConversationMessageRequest withRequest(UpdateServiceConversationMessageUpdateServiceConversationMessageRequest request) {
        this.request = request;
        return this;
    }
    public UpdateServiceConversationMessageSecurity security;
    public UpdateServiceConversationMessageRequest withSecurity(UpdateServiceConversationMessageSecurity security) {
        this.security = security;
        return this;
    }
}