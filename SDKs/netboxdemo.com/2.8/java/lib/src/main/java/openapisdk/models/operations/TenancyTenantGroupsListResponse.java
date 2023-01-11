package openapisdk.models.operations;



public class TenancyTenantGroupsListResponse {
    public String contentType;
    public TenancyTenantGroupsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TenancyTenantGroupsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public TenancyTenantGroupsList200ApplicationJson tenancyTenantGroupsList200ApplicationJSONObject;
    public TenancyTenantGroupsListResponse withTenancyTenantGroupsList200ApplicationJsonObject(TenancyTenantGroupsList200ApplicationJson tenancyTenantGroupsList200ApplicationJSONObject) {
        this.tenancyTenantGroupsList200ApplicationJSONObject = tenancyTenantGroupsList200ApplicationJSONObject;
        return this;
    }
}