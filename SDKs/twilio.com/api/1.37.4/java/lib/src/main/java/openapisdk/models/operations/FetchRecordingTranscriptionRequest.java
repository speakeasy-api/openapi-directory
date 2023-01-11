package openapisdk.models.operations;



public class FetchRecordingTranscriptionRequest {
    public String serverURL;
    public FetchRecordingTranscriptionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchRecordingTranscriptionPathParams pathParams;
    public FetchRecordingTranscriptionRequest withPathParams(FetchRecordingTranscriptionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchRecordingTranscriptionSecurity security;
    public FetchRecordingTranscriptionRequest withSecurity(FetchRecordingTranscriptionSecurity security) {
        this.security = security;
        return this;
    }
}