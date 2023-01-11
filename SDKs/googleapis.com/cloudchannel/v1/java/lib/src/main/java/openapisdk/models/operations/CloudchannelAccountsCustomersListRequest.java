package openapisdk.models.operations;



public class CloudchannelAccountsCustomersListRequest {
    public CloudchannelAccountsCustomersListPathParams pathParams;
    public CloudchannelAccountsCustomersListRequest withPathParams(CloudchannelAccountsCustomersListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudchannelAccountsCustomersListQueryParams queryParams;
    public CloudchannelAccountsCustomersListRequest withQueryParams(CloudchannelAccountsCustomersListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudchannelAccountsCustomersListSecurity security;
    public CloudchannelAccountsCustomersListRequest withSecurity(CloudchannelAccountsCustomersListSecurity security) {
        this.security = security;
        return this;
    }
}