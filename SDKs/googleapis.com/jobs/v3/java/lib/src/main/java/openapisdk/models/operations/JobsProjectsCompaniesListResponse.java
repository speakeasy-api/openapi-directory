package openapisdk.models.operations;



public class JobsProjectsCompaniesListResponse {
    public String contentType;
    public JobsProjectsCompaniesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCompaniesResponse listCompaniesResponse;
    public JobsProjectsCompaniesListResponse withListCompaniesResponse(openapisdk.models.shared.ListCompaniesResponse listCompaniesResponse) {
        this.listCompaniesResponse = listCompaniesResponse;
        return this;
    }
    public Long statusCode;
    public JobsProjectsCompaniesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}