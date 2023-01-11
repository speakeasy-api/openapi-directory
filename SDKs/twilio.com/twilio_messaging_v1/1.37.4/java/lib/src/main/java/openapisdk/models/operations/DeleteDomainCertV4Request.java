package openapisdk.models.operations;



public class DeleteDomainCertV4Request {
    public String serverURL;
    public DeleteDomainCertV4Request withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteDomainCertV4PathParams pathParams;
    public DeleteDomainCertV4Request withPathParams(DeleteDomainCertV4PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteDomainCertV4Security security;
    public DeleteDomainCertV4Request withSecurity(DeleteDomainCertV4Security security) {
        this.security = security;
        return this;
    }
}