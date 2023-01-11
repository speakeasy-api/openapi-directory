package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateInteractionChannelParticipantRequest {
    public String serverURL;
    public CreateInteractionChannelParticipantRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateInteractionChannelParticipantPathParams pathParams;
    public CreateInteractionChannelParticipantRequest withPathParams(CreateInteractionChannelParticipantPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateInteractionChannelParticipantCreateInteractionChannelParticipantRequest request;
    public CreateInteractionChannelParticipantRequest withRequest(CreateInteractionChannelParticipantCreateInteractionChannelParticipantRequest request) {
        this.request = request;
        return this;
    }
    public CreateInteractionChannelParticipantSecurity security;
    public CreateInteractionChannelParticipantRequest withSecurity(CreateInteractionChannelParticipantSecurity security) {
        this.security = security;
        return this;
    }
}