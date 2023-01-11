package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConversationRequest {
    public String serverURL;
    public UpdateConversationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateConversationPathParams pathParams;
    public UpdateConversationRequest withPathParams(UpdateConversationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateConversationHeaders headers;
    public UpdateConversationRequest withHeaders(UpdateConversationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateConversationUpdateConversationRequest request;
    public UpdateConversationRequest withRequest(UpdateConversationUpdateConversationRequest request) {
        this.request = request;
        return this;
    }
    public UpdateConversationSecurity security;
    public UpdateConversationRequest withSecurity(UpdateConversationSecurity security) {
        this.security = security;
        return this;
    }
}