package openapisdk.models.operations;



public class ListRecordingRequest {
    public String serverURL;
    public ListRecordingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListRecordingQueryParams queryParams;
    public ListRecordingRequest withQueryParams(ListRecordingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListRecordingSecurity security;
    public ListRecordingRequest withSecurity(ListRecordingSecurity security) {
        this.security = security;
        return this;
    }
}