package openapisdk.models.operations;



public class FetchFieldValueRequest {
    public String serverURL;
    public FetchFieldValueRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchFieldValuePathParams pathParams;
    public FetchFieldValueRequest withPathParams(FetchFieldValuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchFieldValueSecurity security;
    public FetchFieldValueRequest withSecurity(FetchFieldValueSecurity security) {
        this.security = security;
        return this;
    }
}