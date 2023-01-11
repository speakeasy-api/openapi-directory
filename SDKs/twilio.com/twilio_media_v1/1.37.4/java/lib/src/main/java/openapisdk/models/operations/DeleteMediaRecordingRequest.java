package openapisdk.models.operations;



public class DeleteMediaRecordingRequest {
    public String serverURL;
    public DeleteMediaRecordingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteMediaRecordingPathParams pathParams;
    public DeleteMediaRecordingRequest withPathParams(DeleteMediaRecordingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteMediaRecordingSecurity security;
    public DeleteMediaRecordingRequest withSecurity(DeleteMediaRecordingSecurity security) {
        this.security = security;
        return this;
    }
}