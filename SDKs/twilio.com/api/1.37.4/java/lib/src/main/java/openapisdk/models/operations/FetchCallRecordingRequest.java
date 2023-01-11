package openapisdk.models.operations;



public class FetchCallRecordingRequest {
    public String serverURL;
    public FetchCallRecordingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchCallRecordingPathParams pathParams;
    public FetchCallRecordingRequest withPathParams(FetchCallRecordingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchCallRecordingSecurity security;
    public FetchCallRecordingRequest withSecurity(FetchCallRecordingSecurity security) {
        this.security = security;
        return this;
    }
}