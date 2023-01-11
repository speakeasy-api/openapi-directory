package openapisdk.models.operations;



public class DnsManagedZonesTestIamPermissionsResponse {
    public String contentType;
    public DnsManagedZonesTestIamPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleIamV1TestIamPermissionsResponse googleIamV1TestIamPermissionsResponse;
    public DnsManagedZonesTestIamPermissionsResponse withGoogleIamV1TestIamPermissionsResponse(openapisdk.models.shared.GoogleIamV1TestIamPermissionsResponse googleIamV1TestIamPermissionsResponse) {
        this.googleIamV1TestIamPermissionsResponse = googleIamV1TestIamPermissionsResponse;
        return this;
    }
    public Long statusCode;
    public DnsManagedZonesTestIamPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}