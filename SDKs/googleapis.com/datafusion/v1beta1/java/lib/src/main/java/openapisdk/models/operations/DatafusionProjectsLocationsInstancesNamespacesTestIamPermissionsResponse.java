package openapisdk.models.operations;



public class DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsResponse {
    public String contentType;
    public DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TestIamPermissionsResponse testIamPermissionsResponse;
    public DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsResponse withTestIamPermissionsResponse(openapisdk.models.shared.TestIamPermissionsResponse testIamPermissionsResponse) {
        this.testIamPermissionsResponse = testIamPermissionsResponse;
        return this;
    }
}