package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRoomParticipantRequest {
    public String serverURL;
    public UpdateRoomParticipantRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateRoomParticipantPathParams pathParams;
    public UpdateRoomParticipantRequest withPathParams(UpdateRoomParticipantPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateRoomParticipantUpdateRoomParticipantRequest request;
    public UpdateRoomParticipantRequest withRequest(UpdateRoomParticipantUpdateRoomParticipantRequest request) {
        this.request = request;
        return this;
    }
    public UpdateRoomParticipantSecurity security;
    public UpdateRoomParticipantRequest withSecurity(UpdateRoomParticipantSecurity security) {
        this.security = security;
        return this;
    }
}