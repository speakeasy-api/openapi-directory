package openapisdk.models.operations;



public class JobsProjectsTenantsJobsListResponse {
    public String contentType;
    public JobsProjectsTenantsJobsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListJobsResponse listJobsResponse;
    public JobsProjectsTenantsJobsListResponse withListJobsResponse(openapisdk.models.shared.ListJobsResponse listJobsResponse) {
        this.listJobsResponse = listJobsResponse;
        return this;
    }
    public Long statusCode;
    public JobsProjectsTenantsJobsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}