package openapisdk.models.operations;



public class TenancyTenantGroupsPartialUpdateResponse {
    public String contentType;
    public TenancyTenantGroupsPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TenancyTenantGroupsPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TenantGroup tenantGroup;
    public TenancyTenantGroupsPartialUpdateResponse withTenantGroup(openapisdk.models.shared.TenantGroup tenantGroup) {
        this.tenantGroup = tenantGroup;
        return this;
    }
}