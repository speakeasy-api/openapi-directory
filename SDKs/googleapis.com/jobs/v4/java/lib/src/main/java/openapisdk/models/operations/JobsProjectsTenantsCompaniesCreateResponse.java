package openapisdk.models.operations;



public class JobsProjectsTenantsCompaniesCreateResponse {
    public openapisdk.models.shared.Company company;
    public JobsProjectsTenantsCompaniesCreateResponse withCompany(openapisdk.models.shared.Company company) {
        this.company = company;
        return this;
    }
    public String contentType;
    public JobsProjectsTenantsCompaniesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public JobsProjectsTenantsCompaniesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}