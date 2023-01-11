package openapisdk.models.operations;



public class NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsResponse {
    public String contentType;
    public NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleIamV1TestIamPermissionsResponse googleIamV1TestIamPermissionsResponse;
    public NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsResponse withGoogleIamV1TestIamPermissionsResponse(openapisdk.models.shared.GoogleIamV1TestIamPermissionsResponse googleIamV1TestIamPermissionsResponse) {
        this.googleIamV1TestIamPermissionsResponse = googleIamV1TestIamPermissionsResponse;
        return this;
    }
    public Long statusCode;
    public NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}