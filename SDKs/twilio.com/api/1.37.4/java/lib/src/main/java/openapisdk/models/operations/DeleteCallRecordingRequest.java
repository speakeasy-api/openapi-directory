package openapisdk.models.operations;



public class DeleteCallRecordingRequest {
    public String serverURL;
    public DeleteCallRecordingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteCallRecordingPathParams pathParams;
    public DeleteCallRecordingRequest withPathParams(DeleteCallRecordingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteCallRecordingSecurity security;
    public DeleteCallRecordingRequest withSecurity(DeleteCallRecordingSecurity security) {
        this.security = security;
        return this;
    }
}