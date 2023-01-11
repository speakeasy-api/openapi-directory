package openapisdk.models.operations;



public class ListMediaRecordingRequest {
    public String serverURL;
    public ListMediaRecordingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListMediaRecordingQueryParams queryParams;
    public ListMediaRecordingRequest withQueryParams(ListMediaRecordingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListMediaRecordingSecurity security;
    public ListMediaRecordingRequest withSecurity(ListMediaRecordingSecurity security) {
        this.security = security;
        return this;
    }
}