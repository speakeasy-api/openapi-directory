package openapisdk.models.operations;



public class FetchDomainCertV4Request {
    public String serverURL;
    public FetchDomainCertV4Request withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchDomainCertV4PathParams pathParams;
    public FetchDomainCertV4Request withPathParams(FetchDomainCertV4PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchDomainCertV4Security security;
    public FetchDomainCertV4Request withSecurity(FetchDomainCertV4Security security) {
        this.security = security;
        return this;
    }
}