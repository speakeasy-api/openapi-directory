package openapisdk.models.operations;



public class AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsResponse {
    public String contentType;
    public AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TestIamPermissionsResponse testIamPermissionsResponse;
    public AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsResponse withTestIamPermissionsResponse(openapisdk.models.shared.TestIamPermissionsResponse testIamPermissionsResponse) {
        this.testIamPermissionsResponse = testIamPermissionsResponse;
        return this;
    }
}