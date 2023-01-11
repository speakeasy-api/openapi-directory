package openapisdk.models.operations;



public class FetchFormRequest {
    public String serverURL;
    public FetchFormRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchFormPathParams pathParams;
    public FetchFormRequest withPathParams(FetchFormPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchFormSecurity security;
    public FetchFormRequest withSecurity(FetchFormSecurity security) {
        this.security = security;
        return this;
    }
}