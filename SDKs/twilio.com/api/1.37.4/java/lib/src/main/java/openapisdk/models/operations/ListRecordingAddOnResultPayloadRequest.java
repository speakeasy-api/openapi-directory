package openapisdk.models.operations;



public class ListRecordingAddOnResultPayloadRequest {
    public String serverURL;
    public ListRecordingAddOnResultPayloadRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListRecordingAddOnResultPayloadPathParams pathParams;
    public ListRecordingAddOnResultPayloadRequest withPathParams(ListRecordingAddOnResultPayloadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListRecordingAddOnResultPayloadQueryParams queryParams;
    public ListRecordingAddOnResultPayloadRequest withQueryParams(ListRecordingAddOnResultPayloadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListRecordingAddOnResultPayloadSecurity security;
    public ListRecordingAddOnResultPayloadRequest withSecurity(ListRecordingAddOnResultPayloadSecurity security) {
        this.security = security;
        return this;
    }
}