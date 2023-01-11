package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateParticipantRequest {
    public String serverURL;
    public UpdateParticipantRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateParticipantPathParams pathParams;
    public UpdateParticipantRequest withPathParams(UpdateParticipantPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateParticipantUpdateParticipantRequest request;
    public UpdateParticipantRequest withRequest(UpdateParticipantUpdateParticipantRequest request) {
        this.request = request;
        return this;
    }
    public UpdateParticipantSecurity security;
    public UpdateParticipantRequest withSecurity(UpdateParticipantSecurity security) {
        this.security = security;
        return this;
    }
}