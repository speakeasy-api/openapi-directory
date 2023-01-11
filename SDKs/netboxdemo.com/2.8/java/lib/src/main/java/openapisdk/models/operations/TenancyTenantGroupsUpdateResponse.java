package openapisdk.models.operations;



public class TenancyTenantGroupsUpdateResponse {
    public String contentType;
    public TenancyTenantGroupsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TenancyTenantGroupsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TenantGroup tenantGroup;
    public TenancyTenantGroupsUpdateResponse withTenantGroup(openapisdk.models.shared.TenantGroup tenantGroup) {
        this.tenantGroup = tenantGroup;
        return this;
    }
}