package openapisdk.models.operations;



public class RunProjectsLocationsJobsExecutionsListResponse {
    public String contentType;
    public RunProjectsLocationsJobsExecutionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudRunV2ListExecutionsResponse googleCloudRunV2ListExecutionsResponse;
    public RunProjectsLocationsJobsExecutionsListResponse withGoogleCloudRunV2ListExecutionsResponse(openapisdk.models.shared.GoogleCloudRunV2ListExecutionsResponse googleCloudRunV2ListExecutionsResponse) {
        this.googleCloudRunV2ListExecutionsResponse = googleCloudRunV2ListExecutionsResponse;
        return this;
    }
    public Long statusCode;
    public RunProjectsLocationsJobsExecutionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}