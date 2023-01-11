package openapisdk.models.operations;



public class UpdrnToAddressRequest {
    public UpdrnToAddressPathParams pathParams;
    public UpdrnToAddressRequest withPathParams(UpdrnToAddressPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdrnToAddressQueryParams queryParams;
    public UpdrnToAddressRequest withQueryParams(UpdrnToAddressQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UpdrnToAddressSecurity security;
    public UpdrnToAddressRequest withSecurity(UpdrnToAddressSecurity security) {
        this.security = security;
        return this;
    }
}