package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceConversationParticipantRequest {
    public String serverURL;
    public UpdateServiceConversationParticipantRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateServiceConversationParticipantPathParams pathParams;
    public UpdateServiceConversationParticipantRequest withPathParams(UpdateServiceConversationParticipantPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateServiceConversationParticipantHeaders headers;
    public UpdateServiceConversationParticipantRequest withHeaders(UpdateServiceConversationParticipantHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest request;
    public UpdateServiceConversationParticipantRequest withRequest(UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest request) {
        this.request = request;
        return this;
    }
    public UpdateServiceConversationParticipantSecurity security;
    public UpdateServiceConversationParticipantRequest withSecurity(UpdateServiceConversationParticipantSecurity security) {
        this.security = security;
        return this;
    }
}