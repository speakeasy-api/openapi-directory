package openapisdk.models.operations;



public class BatchProjectsLocationsJobsListResponse {
    public String contentType;
    public BatchProjectsLocationsJobsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListJobsResponse listJobsResponse;
    public BatchProjectsLocationsJobsListResponse withListJobsResponse(openapisdk.models.shared.ListJobsResponse listJobsResponse) {
        this.listJobsResponse = listJobsResponse;
        return this;
    }
    public Long statusCode;
    public BatchProjectsLocationsJobsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}