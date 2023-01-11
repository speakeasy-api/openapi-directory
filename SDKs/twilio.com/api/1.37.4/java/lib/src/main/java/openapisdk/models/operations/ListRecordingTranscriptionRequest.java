package openapisdk.models.operations;



public class ListRecordingTranscriptionRequest {
    public String serverURL;
    public ListRecordingTranscriptionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListRecordingTranscriptionPathParams pathParams;
    public ListRecordingTranscriptionRequest withPathParams(ListRecordingTranscriptionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListRecordingTranscriptionQueryParams queryParams;
    public ListRecordingTranscriptionRequest withQueryParams(ListRecordingTranscriptionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListRecordingTranscriptionSecurity security;
    public ListRecordingTranscriptionRequest withSecurity(ListRecordingTranscriptionSecurity security) {
        this.security = security;
        return this;
    }
}