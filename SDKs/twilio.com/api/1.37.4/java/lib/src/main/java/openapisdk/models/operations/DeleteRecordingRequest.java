package openapisdk.models.operations;



public class DeleteRecordingRequest {
    public String serverURL;
    public DeleteRecordingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteRecordingPathParams pathParams;
    public DeleteRecordingRequest withPathParams(DeleteRecordingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteRecordingSecurity security;
    public DeleteRecordingRequest withSecurity(DeleteRecordingSecurity security) {
        this.security = security;
        return this;
    }
}