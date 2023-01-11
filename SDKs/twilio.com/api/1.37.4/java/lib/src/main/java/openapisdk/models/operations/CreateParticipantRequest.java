package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateParticipantRequest {
    public String serverURL;
    public CreateParticipantRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateParticipantPathParams pathParams;
    public CreateParticipantRequest withPathParams(CreateParticipantPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateParticipantCreateParticipantRequest request;
    public CreateParticipantRequest withRequest(CreateParticipantCreateParticipantRequest request) {
        this.request = request;
        return this;
    }
    public CreateParticipantSecurity security;
    public CreateParticipantRequest withSecurity(CreateParticipantSecurity security) {
        this.security = security;
        return this;
    }
}