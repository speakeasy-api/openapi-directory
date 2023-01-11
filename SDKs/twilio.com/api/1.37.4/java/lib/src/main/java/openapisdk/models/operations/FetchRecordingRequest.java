package openapisdk.models.operations;



public class FetchRecordingRequest {
    public String serverURL;
    public FetchRecordingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchRecordingPathParams pathParams;
    public FetchRecordingRequest withPathParams(FetchRecordingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchRecordingQueryParams queryParams;
    public FetchRecordingRequest withQueryParams(FetchRecordingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FetchRecordingSecurity security;
    public FetchRecordingRequest withSecurity(FetchRecordingSecurity security) {
        this.security = security;
        return this;
    }
}