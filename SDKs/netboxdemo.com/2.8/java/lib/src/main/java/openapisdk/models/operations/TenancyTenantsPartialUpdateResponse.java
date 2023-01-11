package openapisdk.models.operations;



public class TenancyTenantsPartialUpdateResponse {
    public String contentType;
    public TenancyTenantsPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TenancyTenantsPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Tenant tenant;
    public TenancyTenantsPartialUpdateResponse withTenant(openapisdk.models.shared.Tenant tenant) {
        this.tenant = tenant;
        return this;
    }
}