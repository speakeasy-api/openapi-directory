package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceUserConversationRequest {
    public String serverURL;
    public UpdateServiceUserConversationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateServiceUserConversationPathParams pathParams;
    public UpdateServiceUserConversationRequest withPathParams(UpdateServiceUserConversationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateServiceUserConversationUpdateServiceUserConversationRequest request;
    public UpdateServiceUserConversationRequest withRequest(UpdateServiceUserConversationUpdateServiceUserConversationRequest request) {
        this.request = request;
        return this;
    }
    public UpdateServiceUserConversationSecurity security;
    public UpdateServiceUserConversationRequest withSecurity(UpdateServiceUserConversationSecurity security) {
        this.security = security;
        return this;
    }
}