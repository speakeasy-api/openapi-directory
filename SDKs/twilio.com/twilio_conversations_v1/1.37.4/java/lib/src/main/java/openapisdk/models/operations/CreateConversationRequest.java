package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateConversationRequest {
    public String serverURL;
    public CreateConversationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateConversationHeaders headers;
    public CreateConversationRequest withHeaders(CreateConversationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateConversationCreateConversationRequest request;
    public CreateConversationRequest withRequest(CreateConversationCreateConversationRequest request) {
        this.request = request;
        return this;
    }
    public CreateConversationSecurity security;
    public CreateConversationRequest withSecurity(CreateConversationSecurity security) {
        this.security = security;
        return this;
    }
}