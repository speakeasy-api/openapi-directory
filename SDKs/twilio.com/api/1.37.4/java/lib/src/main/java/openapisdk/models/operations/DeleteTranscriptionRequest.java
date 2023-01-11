package openapisdk.models.operations;



public class DeleteTranscriptionRequest {
    public String serverURL;
    public DeleteTranscriptionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteTranscriptionPathParams pathParams;
    public DeleteTranscriptionRequest withPathParams(DeleteTranscriptionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteTranscriptionSecurity security;
    public DeleteTranscriptionRequest withSecurity(DeleteTranscriptionSecurity security) {
        this.security = security;
        return this;
    }
}