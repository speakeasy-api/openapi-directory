package openapisdk.models.operations;



public class GetAccountSitesRequest {
    public GetAccountSitesQueryParams queryParams;
    public GetAccountSitesRequest withQueryParams(GetAccountSitesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAccountSitesSecurity security;
    public GetAccountSitesRequest withSecurity(GetAccountSitesSecurity security) {
        this.security = security;
        return this;
    }
}