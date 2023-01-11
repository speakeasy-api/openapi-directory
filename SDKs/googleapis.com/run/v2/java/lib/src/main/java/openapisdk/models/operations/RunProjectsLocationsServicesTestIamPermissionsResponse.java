package openapisdk.models.operations;



public class RunProjectsLocationsServicesTestIamPermissionsResponse {
    public String contentType;
    public RunProjectsLocationsServicesTestIamPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleIamV1TestIamPermissionsResponse googleIamV1TestIamPermissionsResponse;
    public RunProjectsLocationsServicesTestIamPermissionsResponse withGoogleIamV1TestIamPermissionsResponse(openapisdk.models.shared.GoogleIamV1TestIamPermissionsResponse googleIamV1TestIamPermissionsResponse) {
        this.googleIamV1TestIamPermissionsResponse = googleIamV1TestIamPermissionsResponse;
        return this;
    }
    public Long statusCode;
    public RunProjectsLocationsServicesTestIamPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}