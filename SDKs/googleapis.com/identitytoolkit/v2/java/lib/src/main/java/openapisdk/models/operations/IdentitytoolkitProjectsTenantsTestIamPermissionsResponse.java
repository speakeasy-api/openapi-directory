package openapisdk.models.operations;



public class IdentitytoolkitProjectsTenantsTestIamPermissionsResponse {
    public String contentType;
    public IdentitytoolkitProjectsTenantsTestIamPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleIamV1TestIamPermissionsResponse googleIamV1TestIamPermissionsResponse;
    public IdentitytoolkitProjectsTenantsTestIamPermissionsResponse withGoogleIamV1TestIamPermissionsResponse(openapisdk.models.shared.GoogleIamV1TestIamPermissionsResponse googleIamV1TestIamPermissionsResponse) {
        this.googleIamV1TestIamPermissionsResponse = googleIamV1TestIamPermissionsResponse;
        return this;
    }
    public Long statusCode;
    public IdentitytoolkitProjectsTenantsTestIamPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}