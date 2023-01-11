package openapisdk.models.operations;



public class FetchMediaRecordingRequest {
    public String serverURL;
    public FetchMediaRecordingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchMediaRecordingPathParams pathParams;
    public FetchMediaRecordingRequest withPathParams(FetchMediaRecordingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchMediaRecordingSecurity security;
    public FetchMediaRecordingRequest withSecurity(FetchMediaRecordingSecurity security) {
        this.security = security;
        return this;
    }
}