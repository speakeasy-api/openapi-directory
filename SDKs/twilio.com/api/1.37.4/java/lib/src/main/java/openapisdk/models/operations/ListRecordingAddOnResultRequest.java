package openapisdk.models.operations;



public class ListRecordingAddOnResultRequest {
    public String serverURL;
    public ListRecordingAddOnResultRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListRecordingAddOnResultPathParams pathParams;
    public ListRecordingAddOnResultRequest withPathParams(ListRecordingAddOnResultPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListRecordingAddOnResultQueryParams queryParams;
    public ListRecordingAddOnResultRequest withQueryParams(ListRecordingAddOnResultQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListRecordingAddOnResultSecurity security;
    public ListRecordingAddOnResultRequest withSecurity(ListRecordingAddOnResultSecurity security) {
        this.security = security;
        return this;
    }
}