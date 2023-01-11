package openapisdk.models.operations;



public class CloudchannelAccountsCustomersListPurchasableSkusRequest {
    public CloudchannelAccountsCustomersListPurchasableSkusPathParams pathParams;
    public CloudchannelAccountsCustomersListPurchasableSkusRequest withPathParams(CloudchannelAccountsCustomersListPurchasableSkusPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudchannelAccountsCustomersListPurchasableSkusQueryParams queryParams;
    public CloudchannelAccountsCustomersListPurchasableSkusRequest withQueryParams(CloudchannelAccountsCustomersListPurchasableSkusQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudchannelAccountsCustomersListPurchasableSkusSecurity security;
    public CloudchannelAccountsCustomersListPurchasableSkusRequest withSecurity(CloudchannelAccountsCustomersListPurchasableSkusSecurity security) {
        this.security = security;
        return this;
    }
}