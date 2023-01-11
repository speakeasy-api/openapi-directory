package openapisdk.models.operations;



public class FetchRecordingAddOnResultPayloadRequest {
    public String serverURL;
    public FetchRecordingAddOnResultPayloadRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchRecordingAddOnResultPayloadPathParams pathParams;
    public FetchRecordingAddOnResultPayloadRequest withPathParams(FetchRecordingAddOnResultPayloadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchRecordingAddOnResultPayloadSecurity security;
    public FetchRecordingAddOnResultPayloadRequest withSecurity(FetchRecordingAddOnResultPayloadSecurity security) {
        this.security = security;
        return this;
    }
}