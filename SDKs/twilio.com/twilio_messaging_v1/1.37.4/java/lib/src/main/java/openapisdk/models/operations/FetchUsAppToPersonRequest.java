package openapisdk.models.operations;



public class FetchUsAppToPersonRequest {
    public String serverURL;
    public FetchUsAppToPersonRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchUsAppToPersonPathParams pathParams;
    public FetchUsAppToPersonRequest withPathParams(FetchUsAppToPersonPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchUsAppToPersonSecurity security;
    public FetchUsAppToPersonRequest withSecurity(FetchUsAppToPersonSecurity security) {
        this.security = security;
        return this;
    }
}