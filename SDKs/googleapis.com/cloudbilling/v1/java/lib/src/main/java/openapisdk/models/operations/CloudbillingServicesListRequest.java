package openapisdk.models.operations;



public class CloudbillingServicesListRequest {
    public CloudbillingServicesListQueryParams queryParams;
    public CloudbillingServicesListRequest withQueryParams(CloudbillingServicesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudbillingServicesListSecurity security;
    public CloudbillingServicesListRequest withSecurity(CloudbillingServicesListSecurity security) {
        this.security = security;
        return this;
    }
}