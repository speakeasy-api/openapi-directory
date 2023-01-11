package openapisdk.models.operations;



public class FetchRoomParticipantRequest {
    public String serverURL;
    public FetchRoomParticipantRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchRoomParticipantPathParams pathParams;
    public FetchRoomParticipantRequest withPathParams(FetchRoomParticipantPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchRoomParticipantSecurity security;
    public FetchRoomParticipantRequest withSecurity(FetchRoomParticipantSecurity security) {
        this.security = security;
        return this;
    }
}