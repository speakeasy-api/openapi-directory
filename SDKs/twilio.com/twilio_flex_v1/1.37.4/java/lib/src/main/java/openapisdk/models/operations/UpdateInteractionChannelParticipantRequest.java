package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateInteractionChannelParticipantRequest {
    public String serverURL;
    public UpdateInteractionChannelParticipantRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateInteractionChannelParticipantPathParams pathParams;
    public UpdateInteractionChannelParticipantRequest withPathParams(UpdateInteractionChannelParticipantPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateInteractionChannelParticipantUpdateInteractionChannelParticipantRequest request;
    public UpdateInteractionChannelParticipantRequest withRequest(UpdateInteractionChannelParticipantUpdateInteractionChannelParticipantRequest request) {
        this.request = request;
        return this;
    }
    public UpdateInteractionChannelParticipantSecurity security;
    public UpdateInteractionChannelParticipantRequest withSecurity(UpdateInteractionChannelParticipantSecurity security) {
        this.security = security;
        return this;
    }
}