package openapisdk.models.operations;



public class CloudbillingServicesSkusListRequest {
    public CloudbillingServicesSkusListPathParams pathParams;
    public CloudbillingServicesSkusListRequest withPathParams(CloudbillingServicesSkusListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudbillingServicesSkusListQueryParams queryParams;
    public CloudbillingServicesSkusListRequest withQueryParams(CloudbillingServicesSkusListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudbillingServicesSkusListSecurity security;
    public CloudbillingServicesSkusListRequest withSecurity(CloudbillingServicesSkusListSecurity security) {
        this.security = security;
        return this;
    }
}