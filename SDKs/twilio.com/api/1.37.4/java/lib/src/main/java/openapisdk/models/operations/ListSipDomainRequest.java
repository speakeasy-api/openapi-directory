package openapisdk.models.operations;



public class ListSipDomainRequest {
    public String serverURL;
    public ListSipDomainRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListSipDomainPathParams pathParams;
    public ListSipDomainRequest withPathParams(ListSipDomainPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListSipDomainQueryParams queryParams;
    public ListSipDomainRequest withQueryParams(ListSipDomainQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSipDomainSecurity security;
    public ListSipDomainRequest withSecurity(ListSipDomainSecurity security) {
        this.security = security;
        return this;
    }
}