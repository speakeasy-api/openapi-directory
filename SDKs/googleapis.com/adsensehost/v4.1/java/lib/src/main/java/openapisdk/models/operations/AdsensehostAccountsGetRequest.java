package openapisdk.models.operations;



public class AdsensehostAccountsGetRequest {
    public AdsensehostAccountsGetPathParams pathParams;
    public AdsensehostAccountsGetRequest withPathParams(AdsensehostAccountsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AdsensehostAccountsGetQueryParams queryParams;
    public AdsensehostAccountsGetRequest withQueryParams(AdsensehostAccountsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AdsensehostAccountsGetSecurity security;
    public AdsensehostAccountsGetRequest withSecurity(AdsensehostAccountsGetSecurity security) {
        this.security = security;
        return this;
    }
}