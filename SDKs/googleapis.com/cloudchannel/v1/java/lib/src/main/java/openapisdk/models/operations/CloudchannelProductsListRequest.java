package openapisdk.models.operations;



public class CloudchannelProductsListRequest {
    public CloudchannelProductsListQueryParams queryParams;
    public CloudchannelProductsListRequest withQueryParams(CloudchannelProductsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudchannelProductsListSecurity security;
    public CloudchannelProductsListRequest withSecurity(CloudchannelProductsListSecurity security) {
        this.security = security;
        return this;
    }
}