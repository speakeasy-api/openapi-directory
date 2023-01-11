package openapisdk.models.operations;



public class ListRoomParticipantSubscribedTrackRequest {
    public String serverURL;
    public ListRoomParticipantSubscribedTrackRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListRoomParticipantSubscribedTrackPathParams pathParams;
    public ListRoomParticipantSubscribedTrackRequest withPathParams(ListRoomParticipantSubscribedTrackPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListRoomParticipantSubscribedTrackQueryParams queryParams;
    public ListRoomParticipantSubscribedTrackRequest withQueryParams(ListRoomParticipantSubscribedTrackQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListRoomParticipantSubscribedTrackSecurity security;
    public ListRoomParticipantSubscribedTrackRequest withSecurity(ListRoomParticipantSubscribedTrackSecurity security) {
        this.security = security;
        return this;
    }
}