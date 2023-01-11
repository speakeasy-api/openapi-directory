package openapisdk.models.operations;



public class AdsensehostAccountsListRequest {
    public AdsensehostAccountsListQueryParams queryParams;
    public AdsensehostAccountsListRequest withQueryParams(AdsensehostAccountsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AdsensehostAccountsListSecurity security;
    public AdsensehostAccountsListRequest withSecurity(AdsensehostAccountsListSecurity security) {
        this.security = security;
        return this;
    }
}