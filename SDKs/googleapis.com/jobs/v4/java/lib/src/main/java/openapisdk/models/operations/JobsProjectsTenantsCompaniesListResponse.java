package openapisdk.models.operations;



public class JobsProjectsTenantsCompaniesListResponse {
    public String contentType;
    public JobsProjectsTenantsCompaniesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCompaniesResponse listCompaniesResponse;
    public JobsProjectsTenantsCompaniesListResponse withListCompaniesResponse(openapisdk.models.shared.ListCompaniesResponse listCompaniesResponse) {
        this.listCompaniesResponse = listCompaniesResponse;
        return this;
    }
    public Long statusCode;
    public JobsProjectsTenantsCompaniesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}