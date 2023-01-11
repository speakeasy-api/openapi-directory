package openapisdk.models.operations;



public class TenancyTenantGroupsCreateResponse {
    public String contentType;
    public TenancyTenantGroupsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TenancyTenantGroupsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TenantGroup tenantGroup;
    public TenancyTenantGroupsCreateResponse withTenantGroup(openapisdk.models.shared.TenantGroup tenantGroup) {
        this.tenantGroup = tenantGroup;
        return this;
    }
}