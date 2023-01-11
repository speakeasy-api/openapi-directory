package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateConversationParticipantRequest {
    public String serverURL;
    public CreateConversationParticipantRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateConversationParticipantPathParams pathParams;
    public CreateConversationParticipantRequest withPathParams(CreateConversationParticipantPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateConversationParticipantHeaders headers;
    public CreateConversationParticipantRequest withHeaders(CreateConversationParticipantHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateConversationParticipantCreateConversationParticipantRequest request;
    public CreateConversationParticipantRequest withRequest(CreateConversationParticipantCreateConversationParticipantRequest request) {
        this.request = request;
        return this;
    }
    public CreateConversationParticipantSecurity security;
    public CreateConversationParticipantRequest withSecurity(CreateConversationParticipantSecurity security) {
        this.security = security;
        return this;
    }
}