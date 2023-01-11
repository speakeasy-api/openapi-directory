package openapisdk.models.operations;



public class AdexchangebuyerAccountsListRequest {
    public AdexchangebuyerAccountsListQueryParams queryParams;
    public AdexchangebuyerAccountsListRequest withQueryParams(AdexchangebuyerAccountsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AdexchangebuyerAccountsListSecurity security;
    public AdexchangebuyerAccountsListRequest withSecurity(AdexchangebuyerAccountsListSecurity security) {
        this.security = security;
        return this;
    }
}