package openapisdk.models.operations;



public class JobsProjectsTenantsCreateResponse {
    public String contentType;
    public JobsProjectsTenantsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public JobsProjectsTenantsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Tenant tenant;
    public JobsProjectsTenantsCreateResponse withTenant(openapisdk.models.shared.Tenant tenant) {
        this.tenant = tenant;
        return this;
    }
}