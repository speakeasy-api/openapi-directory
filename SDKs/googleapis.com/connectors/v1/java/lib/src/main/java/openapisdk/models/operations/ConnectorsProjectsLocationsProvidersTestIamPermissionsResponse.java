package openapisdk.models.operations;



public class ConnectorsProjectsLocationsProvidersTestIamPermissionsResponse {
    public String contentType;
    public ConnectorsProjectsLocationsProvidersTestIamPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ConnectorsProjectsLocationsProvidersTestIamPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TestIamPermissionsResponse testIamPermissionsResponse;
    public ConnectorsProjectsLocationsProvidersTestIamPermissionsResponse withTestIamPermissionsResponse(openapisdk.models.shared.TestIamPermissionsResponse testIamPermissionsResponse) {
        this.testIamPermissionsResponse = testIamPermissionsResponse;
        return this;
    }
}