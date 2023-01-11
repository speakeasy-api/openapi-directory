package openapisdk.models.operations;



public class JobsProjectsJobsListResponse {
    public String contentType;
    public JobsProjectsJobsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListJobsResponse listJobsResponse;
    public JobsProjectsJobsListResponse withListJobsResponse(openapisdk.models.shared.ListJobsResponse listJobsResponse) {
        this.listJobsResponse = listJobsResponse;
        return this;
    }
    public Long statusCode;
    public JobsProjectsJobsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}