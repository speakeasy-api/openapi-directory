package openapisdk.models.operations;



public class ListCallRecordingRequest {
    public String serverURL;
    public ListCallRecordingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListCallRecordingPathParams pathParams;
    public ListCallRecordingRequest withPathParams(ListCallRecordingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListCallRecordingQueryParams queryParams;
    public ListCallRecordingRequest withQueryParams(ListCallRecordingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCallRecordingSecurity security;
    public ListCallRecordingRequest withSecurity(ListCallRecordingSecurity security) {
        this.security = security;
        return this;
    }
}