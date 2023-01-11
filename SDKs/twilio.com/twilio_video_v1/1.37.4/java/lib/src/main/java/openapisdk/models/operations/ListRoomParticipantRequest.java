package openapisdk.models.operations;



public class ListRoomParticipantRequest {
    public String serverURL;
    public ListRoomParticipantRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListRoomParticipantPathParams pathParams;
    public ListRoomParticipantRequest withPathParams(ListRoomParticipantPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListRoomParticipantQueryParams queryParams;
    public ListRoomParticipantRequest withQueryParams(ListRoomParticipantQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListRoomParticipantSecurity security;
    public ListRoomParticipantRequest withSecurity(ListRoomParticipantSecurity security) {
        this.security = security;
        return this;
    }
}