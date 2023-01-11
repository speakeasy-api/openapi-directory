package openapisdk.models.operations;



public class DevicesRequest {
    public DevicesQueryParams queryParams;
    public DevicesRequest withQueryParams(DevicesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DevicesSecurity security;
    public DevicesRequest withSecurity(DevicesSecurity security) {
        this.security = security;
        return this;
    }
}