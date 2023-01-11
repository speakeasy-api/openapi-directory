package openapisdk.models.operations;



public class RunProjectsLocationsServicesRevisionsListResponse {
    public String contentType;
    public RunProjectsLocationsServicesRevisionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudRunV2ListRevisionsResponse googleCloudRunV2ListRevisionsResponse;
    public RunProjectsLocationsServicesRevisionsListResponse withGoogleCloudRunV2ListRevisionsResponse(openapisdk.models.shared.GoogleCloudRunV2ListRevisionsResponse googleCloudRunV2ListRevisionsResponse) {
        this.googleCloudRunV2ListRevisionsResponse = googleCloudRunV2ListRevisionsResponse;
        return this;
    }
    public Long statusCode;
    public RunProjectsLocationsServicesRevisionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}