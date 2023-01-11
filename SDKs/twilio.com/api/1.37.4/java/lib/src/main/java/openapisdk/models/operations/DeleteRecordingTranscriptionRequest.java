package openapisdk.models.operations;



public class DeleteRecordingTranscriptionRequest {
    public String serverURL;
    public DeleteRecordingTranscriptionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteRecordingTranscriptionPathParams pathParams;
    public DeleteRecordingTranscriptionRequest withPathParams(DeleteRecordingTranscriptionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteRecordingTranscriptionSecurity security;
    public DeleteRecordingTranscriptionRequest withSecurity(DeleteRecordingTranscriptionSecurity security) {
        this.security = security;
        return this;
    }
}