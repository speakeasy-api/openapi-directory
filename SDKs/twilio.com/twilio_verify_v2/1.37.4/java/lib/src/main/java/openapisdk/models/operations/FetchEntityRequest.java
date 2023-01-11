package openapisdk.models.operations;



public class FetchEntityRequest {
    public String serverURL;
    public FetchEntityRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchEntityPathParams pathParams;
    public FetchEntityRequest withPathParams(FetchEntityPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchEntitySecurity security;
    public FetchEntityRequest withSecurity(FetchEntitySecurity security) {
        this.security = security;
        return this;
    }
}