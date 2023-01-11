package openapisdk.models.operations;



public class CloudbillingBillingAccountsProjectsListRequest {
    public CloudbillingBillingAccountsProjectsListPathParams pathParams;
    public CloudbillingBillingAccountsProjectsListRequest withPathParams(CloudbillingBillingAccountsProjectsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudbillingBillingAccountsProjectsListQueryParams queryParams;
    public CloudbillingBillingAccountsProjectsListRequest withQueryParams(CloudbillingBillingAccountsProjectsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudbillingBillingAccountsProjectsListSecurity security;
    public CloudbillingBillingAccountsProjectsListRequest withSecurity(CloudbillingBillingAccountsProjectsListSecurity security) {
        this.security = security;
        return this;
    }
}