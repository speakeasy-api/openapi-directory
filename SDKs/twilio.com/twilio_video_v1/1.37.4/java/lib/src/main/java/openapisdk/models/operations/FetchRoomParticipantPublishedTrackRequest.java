package openapisdk.models.operations;



public class FetchRoomParticipantPublishedTrackRequest {
    public String serverURL;
    public FetchRoomParticipantPublishedTrackRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchRoomParticipantPublishedTrackPathParams pathParams;
    public FetchRoomParticipantPublishedTrackRequest withPathParams(FetchRoomParticipantPublishedTrackPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchRoomParticipantPublishedTrackSecurity security;
    public FetchRoomParticipantPublishedTrackRequest withSecurity(FetchRoomParticipantPublishedTrackSecurity security) {
        this.security = security;
        return this;
    }
}