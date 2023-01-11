package openapisdk.models.operations;



public class FetchSipDomainRequest {
    public String serverURL;
    public FetchSipDomainRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSipDomainPathParams pathParams;
    public FetchSipDomainRequest withPathParams(FetchSipDomainPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSipDomainSecurity security;
    public FetchSipDomainRequest withSecurity(FetchSipDomainSecurity security) {
        this.security = security;
        return this;
    }
}