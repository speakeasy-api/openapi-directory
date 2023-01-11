package openapisdk.models.operations;



public class DeleteRoomRecordingRequest {
    public String serverURL;
    public DeleteRoomRecordingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteRoomRecordingPathParams pathParams;
    public DeleteRoomRecordingRequest withPathParams(DeleteRoomRecordingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteRoomRecordingSecurity security;
    public DeleteRoomRecordingRequest withSecurity(DeleteRoomRecordingSecurity security) {
        this.security = security;
        return this;
    }
}