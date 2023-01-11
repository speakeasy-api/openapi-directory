package openapisdk.models.operations;



public class CloudresourcemanagerProjectsTestIamPermissionsResponse {
    public String contentType;
    public CloudresourcemanagerProjectsTestIamPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CloudresourcemanagerProjectsTestIamPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TestIamPermissionsResponse testIamPermissionsResponse;
    public CloudresourcemanagerProjectsTestIamPermissionsResponse withTestIamPermissionsResponse(openapisdk.models.shared.TestIamPermissionsResponse testIamPermissionsResponse) {
        this.testIamPermissionsResponse = testIamPermissionsResponse;
        return this;
    }
}