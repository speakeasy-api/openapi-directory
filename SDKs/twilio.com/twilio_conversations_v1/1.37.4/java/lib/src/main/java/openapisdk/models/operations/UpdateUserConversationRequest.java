package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUserConversationRequest {
    public String serverURL;
    public UpdateUserConversationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateUserConversationPathParams pathParams;
    public UpdateUserConversationRequest withPathParams(UpdateUserConversationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateUserConversationUpdateUserConversationRequest request;
    public UpdateUserConversationRequest withRequest(UpdateUserConversationUpdateUserConversationRequest request) {
        this.request = request;
        return this;
    }
    public UpdateUserConversationSecurity security;
    public UpdateUserConversationRequest withSecurity(UpdateUserConversationSecurity security) {
        this.security = security;
        return this;
    }
}