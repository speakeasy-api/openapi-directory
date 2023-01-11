package openapisdk.models.operations;



public class FetchConferenceRequest {
    public String serverURL;
    public FetchConferenceRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchConferencePathParams pathParams;
    public FetchConferenceRequest withPathParams(FetchConferencePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchConferenceSecurity security;
    public FetchConferenceRequest withSecurity(FetchConferenceSecurity security) {
        this.security = security;
        return this;
    }
}