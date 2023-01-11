package openapisdk.models.operations;



public class ListTranscriptionRequest {
    public String serverURL;
    public ListTranscriptionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListTranscriptionPathParams pathParams;
    public ListTranscriptionRequest withPathParams(ListTranscriptionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListTranscriptionQueryParams queryParams;
    public ListTranscriptionRequest withQueryParams(ListTranscriptionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTranscriptionSecurity security;
    public ListTranscriptionRequest withSecurity(ListTranscriptionSecurity security) {
        this.security = security;
        return this;
    }
}