package openapisdk.models.operations;



public class JobsProjectsCompaniesCreateResponse {
    public openapisdk.models.shared.Company company;
    public JobsProjectsCompaniesCreateResponse withCompany(openapisdk.models.shared.Company company) {
        this.company = company;
        return this;
    }
    public String contentType;
    public JobsProjectsCompaniesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public JobsProjectsCompaniesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}