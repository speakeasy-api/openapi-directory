package openapisdk.models.operations;



public class DeleteSipDomainRequest {
    public String serverURL;
    public DeleteSipDomainRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteSipDomainPathParams pathParams;
    public DeleteSipDomainRequest withPathParams(DeleteSipDomainPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSipDomainSecurity security;
    public DeleteSipDomainRequest withSecurity(DeleteSipDomainSecurity security) {
        this.security = security;
        return this;
    }
}