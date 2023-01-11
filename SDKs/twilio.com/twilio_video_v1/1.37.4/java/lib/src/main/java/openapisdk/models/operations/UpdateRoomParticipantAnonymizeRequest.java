package openapisdk.models.operations;



public class UpdateRoomParticipantAnonymizeRequest {
    public String serverURL;
    public UpdateRoomParticipantAnonymizeRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateRoomParticipantAnonymizePathParams pathParams;
    public UpdateRoomParticipantAnonymizeRequest withPathParams(UpdateRoomParticipantAnonymizePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateRoomParticipantAnonymizeSecurity security;
    public UpdateRoomParticipantAnonymizeRequest withSecurity(UpdateRoomParticipantAnonymizeSecurity security) {
        this.security = security;
        return this;
    }
}