package openapisdk.models.operations;



public class TenancyTenantGroupsReadResponse {
    public String contentType;
    public TenancyTenantGroupsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TenancyTenantGroupsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TenantGroup tenantGroup;
    public TenancyTenantGroupsReadResponse withTenantGroup(openapisdk.models.shared.TenantGroup tenantGroup) {
        this.tenantGroup = tenantGroup;
        return this;
    }
}