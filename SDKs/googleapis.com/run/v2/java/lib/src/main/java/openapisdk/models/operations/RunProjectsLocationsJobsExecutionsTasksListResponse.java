package openapisdk.models.operations;



public class RunProjectsLocationsJobsExecutionsTasksListResponse {
    public String contentType;
    public RunProjectsLocationsJobsExecutionsTasksListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudRunV2ListTasksResponse googleCloudRunV2ListTasksResponse;
    public RunProjectsLocationsJobsExecutionsTasksListResponse withGoogleCloudRunV2ListTasksResponse(openapisdk.models.shared.GoogleCloudRunV2ListTasksResponse googleCloudRunV2ListTasksResponse) {
        this.googleCloudRunV2ListTasksResponse = googleCloudRunV2ListTasksResponse;
        return this;
    }
    public Long statusCode;
    public RunProjectsLocationsJobsExecutionsTasksListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}