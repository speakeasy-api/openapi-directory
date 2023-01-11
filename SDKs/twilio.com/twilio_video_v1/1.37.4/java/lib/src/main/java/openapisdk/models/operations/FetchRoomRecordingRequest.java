package openapisdk.models.operations;



public class FetchRoomRecordingRequest {
    public String serverURL;
    public FetchRoomRecordingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchRoomRecordingPathParams pathParams;
    public FetchRoomRecordingRequest withPathParams(FetchRoomRecordingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchRoomRecordingSecurity security;
    public FetchRoomRecordingRequest withSecurity(FetchRoomRecordingSecurity security) {
        this.security = security;
        return this;
    }
}