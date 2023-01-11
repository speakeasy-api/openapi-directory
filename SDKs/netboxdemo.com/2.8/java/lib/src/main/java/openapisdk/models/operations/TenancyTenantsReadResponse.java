package openapisdk.models.operations;



public class TenancyTenantsReadResponse {
    public String contentType;
    public TenancyTenantsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TenancyTenantsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Tenant tenant;
    public TenancyTenantsReadResponse withTenant(openapisdk.models.shared.Tenant tenant) {
        this.tenant = tenant;
        return this;
    }
}