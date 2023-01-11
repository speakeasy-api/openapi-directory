package openapisdk.models.operations;



public class FetchEventTypeRequest {
    public String serverURL;
    public FetchEventTypeRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchEventTypePathParams pathParams;
    public FetchEventTypeRequest withPathParams(FetchEventTypePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchEventTypeSecurity security;
    public FetchEventTypeRequest withSecurity(FetchEventTypeSecurity security) {
        this.security = security;
        return this;
    }
}