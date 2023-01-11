package openapisdk.models.operations;



public class CloudschedulerProjectsLocationsJobsListResponse {
    public String contentType;
    public CloudschedulerProjectsLocationsJobsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListJobsResponse listJobsResponse;
    public CloudschedulerProjectsLocationsJobsListResponse withListJobsResponse(openapisdk.models.shared.ListJobsResponse listJobsResponse) {
        this.listJobsResponse = listJobsResponse;
        return this;
    }
    public Long statusCode;
    public CloudschedulerProjectsLocationsJobsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}