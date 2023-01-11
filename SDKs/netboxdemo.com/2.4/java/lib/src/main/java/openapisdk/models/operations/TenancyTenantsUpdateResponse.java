package openapisdk.models.operations;



public class TenancyTenantsUpdateResponse {
    public String contentType;
    public TenancyTenantsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TenancyTenantsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Tenant tenant;
    public TenancyTenantsUpdateResponse withTenant(openapisdk.models.shared.Tenant tenant) {
        this.tenant = tenant;
        return this;
    }
}