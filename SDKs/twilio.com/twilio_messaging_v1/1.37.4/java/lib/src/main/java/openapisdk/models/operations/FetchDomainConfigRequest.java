package openapisdk.models.operations;



public class FetchDomainConfigRequest {
    public String serverURL;
    public FetchDomainConfigRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchDomainConfigPathParams pathParams;
    public FetchDomainConfigRequest withPathParams(FetchDomainConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchDomainConfigSecurity security;
    public FetchDomainConfigRequest withSecurity(FetchDomainConfigSecurity security) {
        this.security = security;
        return this;
    }
}