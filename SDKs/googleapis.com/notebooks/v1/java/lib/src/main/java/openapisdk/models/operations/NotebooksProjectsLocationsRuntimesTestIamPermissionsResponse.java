package openapisdk.models.operations;



public class NotebooksProjectsLocationsRuntimesTestIamPermissionsResponse {
    public String contentType;
    public NotebooksProjectsLocationsRuntimesTestIamPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public NotebooksProjectsLocationsRuntimesTestIamPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TestIamPermissionsResponse testIamPermissionsResponse;
    public NotebooksProjectsLocationsRuntimesTestIamPermissionsResponse withTestIamPermissionsResponse(openapisdk.models.shared.TestIamPermissionsResponse testIamPermissionsResponse) {
        this.testIamPermissionsResponse = testIamPermissionsResponse;
        return this;
    }
}