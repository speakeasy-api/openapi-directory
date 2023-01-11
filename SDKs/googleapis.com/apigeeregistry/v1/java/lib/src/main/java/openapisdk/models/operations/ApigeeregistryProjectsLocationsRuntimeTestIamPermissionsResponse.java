package openapisdk.models.operations;



public class ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsResponse {
    public String contentType;
    public ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TestIamPermissionsResponse testIamPermissionsResponse;
    public ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsResponse withTestIamPermissionsResponse(openapisdk.models.shared.TestIamPermissionsResponse testIamPermissionsResponse) {
        this.testIamPermissionsResponse = testIamPermissionsResponse;
        return this;
    }
}