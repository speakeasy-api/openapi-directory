package openapisdk.models.operations;



public class DatafusionProjectsLocationsInstancesTestIamPermissionsResponse {
    public String contentType;
    public DatafusionProjectsLocationsInstancesTestIamPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DatafusionProjectsLocationsInstancesTestIamPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TestIamPermissionsResponse testIamPermissionsResponse;
    public DatafusionProjectsLocationsInstancesTestIamPermissionsResponse withTestIamPermissionsResponse(openapisdk.models.shared.TestIamPermissionsResponse testIamPermissionsResponse) {
        this.testIamPermissionsResponse = testIamPermissionsResponse;
        return this;
    }
}