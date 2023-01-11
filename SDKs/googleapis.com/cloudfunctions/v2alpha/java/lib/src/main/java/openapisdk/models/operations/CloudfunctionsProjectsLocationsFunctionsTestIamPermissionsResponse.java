package openapisdk.models.operations;



public class CloudfunctionsProjectsLocationsFunctionsTestIamPermissionsResponse {
    public String contentType;
    public CloudfunctionsProjectsLocationsFunctionsTestIamPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CloudfunctionsProjectsLocationsFunctionsTestIamPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TestIamPermissionsResponse testIamPermissionsResponse;
    public CloudfunctionsProjectsLocationsFunctionsTestIamPermissionsResponse withTestIamPermissionsResponse(openapisdk.models.shared.TestIamPermissionsResponse testIamPermissionsResponse) {
        this.testIamPermissionsResponse = testIamPermissionsResponse;
        return this;
    }
}