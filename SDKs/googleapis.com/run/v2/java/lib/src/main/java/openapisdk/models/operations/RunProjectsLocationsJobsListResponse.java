package openapisdk.models.operations;



public class RunProjectsLocationsJobsListResponse {
    public String contentType;
    public RunProjectsLocationsJobsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudRunV2ListJobsResponse googleCloudRunV2ListJobsResponse;
    public RunProjectsLocationsJobsListResponse withGoogleCloudRunV2ListJobsResponse(openapisdk.models.shared.GoogleCloudRunV2ListJobsResponse googleCloudRunV2ListJobsResponse) {
        this.googleCloudRunV2ListJobsResponse = googleCloudRunV2ListJobsResponse;
        return this;
    }
    public Long statusCode;
    public RunProjectsLocationsJobsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}