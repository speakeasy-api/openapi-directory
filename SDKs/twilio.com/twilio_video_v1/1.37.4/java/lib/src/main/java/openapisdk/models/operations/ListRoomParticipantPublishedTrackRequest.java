package openapisdk.models.operations;



public class ListRoomParticipantPublishedTrackRequest {
    public String serverURL;
    public ListRoomParticipantPublishedTrackRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListRoomParticipantPublishedTrackPathParams pathParams;
    public ListRoomParticipantPublishedTrackRequest withPathParams(ListRoomParticipantPublishedTrackPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListRoomParticipantPublishedTrackQueryParams queryParams;
    public ListRoomParticipantPublishedTrackRequest withQueryParams(ListRoomParticipantPublishedTrackQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListRoomParticipantPublishedTrackSecurity security;
    public ListRoomParticipantPublishedTrackRequest withSecurity(ListRoomParticipantPublishedTrackSecurity security) {
        this.security = security;
        return this;
    }
}