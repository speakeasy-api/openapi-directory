package openapisdk.models.operations;



public class CloudbillingBillingAccountsListRequest {
    public CloudbillingBillingAccountsListQueryParams queryParams;
    public CloudbillingBillingAccountsListRequest withQueryParams(CloudbillingBillingAccountsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudbillingBillingAccountsListSecurity security;
    public CloudbillingBillingAccountsListRequest withSecurity(CloudbillingBillingAccountsListSecurity security) {
        this.security = security;
        return this;
    }
}