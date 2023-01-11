package openapisdk.models.operations;



public class FetchTranscriptionRequest {
    public String serverURL;
    public FetchTranscriptionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchTranscriptionPathParams pathParams;
    public FetchTranscriptionRequest withPathParams(FetchTranscriptionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchTranscriptionSecurity security;
    public FetchTranscriptionRequest withSecurity(FetchTranscriptionSecurity security) {
        this.security = security;
        return this;
    }
}