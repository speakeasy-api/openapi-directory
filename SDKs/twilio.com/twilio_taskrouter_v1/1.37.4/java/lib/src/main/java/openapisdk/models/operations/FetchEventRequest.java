package openapisdk.models.operations;



public class FetchEventRequest {
    public String serverURL;
    public FetchEventRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchEventPathParams pathParams;
    public FetchEventRequest withPathParams(FetchEventPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchEventSecurity security;
    public FetchEventRequest withSecurity(FetchEventSecurity security) {
        this.security = security;
        return this;
    }
}