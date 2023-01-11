package openapisdk.models.operations;



public class RunProjectsLocationsServicesListResponse {
    public String contentType;
    public RunProjectsLocationsServicesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudRunV2ListServicesResponse googleCloudRunV2ListServicesResponse;
    public RunProjectsLocationsServicesListResponse withGoogleCloudRunV2ListServicesResponse(openapisdk.models.shared.GoogleCloudRunV2ListServicesResponse googleCloudRunV2ListServicesResponse) {
        this.googleCloudRunV2ListServicesResponse = googleCloudRunV2ListServicesResponse;
        return this;
    }
    public Long statusCode;
    public RunProjectsLocationsServicesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}