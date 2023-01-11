package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceConversationRequest {
    public String serverURL;
    public UpdateServiceConversationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateServiceConversationPathParams pathParams;
    public UpdateServiceConversationRequest withPathParams(UpdateServiceConversationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateServiceConversationHeaders headers;
    public UpdateServiceConversationRequest withHeaders(UpdateServiceConversationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateServiceConversationUpdateServiceConversationRequest request;
    public UpdateServiceConversationRequest withRequest(UpdateServiceConversationUpdateServiceConversationRequest request) {
        this.request = request;
        return this;
    }
    public UpdateServiceConversationSecurity security;
    public UpdateServiceConversationRequest withSecurity(UpdateServiceConversationSecurity security) {
        this.security = security;
        return this;
    }
}