package openapisdk.models.operations;



public class CloudchannelProductsSkusListRequest {
    public CloudchannelProductsSkusListPathParams pathParams;
    public CloudchannelProductsSkusListRequest withPathParams(CloudchannelProductsSkusListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudchannelProductsSkusListQueryParams queryParams;
    public CloudchannelProductsSkusListRequest withQueryParams(CloudchannelProductsSkusListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudchannelProductsSkusListSecurity security;
    public CloudchannelProductsSkusListRequest withSecurity(CloudchannelProductsSkusListSecurity security) {
        this.security = security;
        return this;
    }
}