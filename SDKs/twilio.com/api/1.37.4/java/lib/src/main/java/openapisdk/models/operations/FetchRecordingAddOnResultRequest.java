package openapisdk.models.operations;



public class FetchRecordingAddOnResultRequest {
    public String serverURL;
    public FetchRecordingAddOnResultRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchRecordingAddOnResultPathParams pathParams;
    public FetchRecordingAddOnResultRequest withPathParams(FetchRecordingAddOnResultPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchRecordingAddOnResultSecurity security;
    public FetchRecordingAddOnResultRequest withSecurity(FetchRecordingAddOnResultSecurity security) {
        this.security = security;
        return this;
    }
}