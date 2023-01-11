package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateServiceConversationParticipantRequest {
    public String serverURL;
    public CreateServiceConversationParticipantRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateServiceConversationParticipantPathParams pathParams;
    public CreateServiceConversationParticipantRequest withPathParams(CreateServiceConversationParticipantPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateServiceConversationParticipantHeaders headers;
    public CreateServiceConversationParticipantRequest withHeaders(CreateServiceConversationParticipantHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateServiceConversationParticipantCreateServiceConversationParticipantRequest request;
    public CreateServiceConversationParticipantRequest withRequest(CreateServiceConversationParticipantCreateServiceConversationParticipantRequest request) {
        this.request = request;
        return this;
    }
    public CreateServiceConversationParticipantSecurity security;
    public CreateServiceConversationParticipantRequest withSecurity(CreateServiceConversationParticipantSecurity security) {
        this.security = security;
        return this;
    }
}