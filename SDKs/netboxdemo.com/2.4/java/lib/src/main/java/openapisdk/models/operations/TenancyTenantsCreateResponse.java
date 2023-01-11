package openapisdk.models.operations;



public class TenancyTenantsCreateResponse {
    public String contentType;
    public TenancyTenantsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TenancyTenantsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Tenant tenant;
    public TenancyTenantsCreateResponse withTenant(openapisdk.models.shared.Tenant tenant) {
        this.tenant = tenant;
        return this;
    }
}