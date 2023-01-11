package openapisdk.models.operations;



public class TenancyTenantsListResponse {
    public String contentType;
    public TenancyTenantsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TenancyTenantsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public TenancyTenantsList200ApplicationJson tenancyTenantsList200ApplicationJSONObject;
    public TenancyTenantsListResponse withTenancyTenantsList200ApplicationJsonObject(TenancyTenantsList200ApplicationJson tenancyTenantsList200ApplicationJSONObject) {
        this.tenancyTenantsList200ApplicationJSONObject = tenancyTenantsList200ApplicationJSONObject;
        return this;
    }
}