package openapisdk.models.operations;



public class ListRoomRecordingRequest {
    public String serverURL;
    public ListRoomRecordingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListRoomRecordingPathParams pathParams;
    public ListRoomRecordingRequest withPathParams(ListRoomRecordingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListRoomRecordingQueryParams queryParams;
    public ListRoomRecordingRequest withQueryParams(ListRoomRecordingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListRoomRecordingSecurity security;
    public ListRoomRecordingRequest withSecurity(ListRoomRecordingSecurity security) {
        this.security = security;
        return this;
    }
}