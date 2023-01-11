package openapisdk.models.operations;



public class FetchRoomParticipantSubscribedTrackRequest {
    public String serverURL;
    public FetchRoomParticipantSubscribedTrackRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchRoomParticipantSubscribedTrackPathParams pathParams;
    public FetchRoomParticipantSubscribedTrackRequest withPathParams(FetchRoomParticipantSubscribedTrackPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchRoomParticipantSubscribedTrackSecurity security;
    public FetchRoomParticipantSubscribedTrackRequest withSecurity(FetchRoomParticipantSubscribedTrackSecurity security) {
        this.security = security;
        return this;
    }
}