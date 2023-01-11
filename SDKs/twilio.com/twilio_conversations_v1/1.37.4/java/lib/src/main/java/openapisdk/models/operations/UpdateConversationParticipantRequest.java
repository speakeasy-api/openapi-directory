package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConversationParticipantRequest {
    public String serverURL;
    public UpdateConversationParticipantRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateConversationParticipantPathParams pathParams;
    public UpdateConversationParticipantRequest withPathParams(UpdateConversationParticipantPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateConversationParticipantHeaders headers;
    public UpdateConversationParticipantRequest withHeaders(UpdateConversationParticipantHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateConversationParticipantUpdateConversationParticipantRequest request;
    public UpdateConversationParticipantRequest withRequest(UpdateConversationParticipantUpdateConversationParticipantRequest request) {
        this.request = request;
        return this;
    }
    public UpdateConversationParticipantSecurity security;
    public UpdateConversationParticipantRequest withSecurity(UpdateConversationParticipantSecurity security) {
        this.security = security;
        return this;
    }
}