package openapisdk.models.operations;



public class NetworksecurityProjectsLocationsServerTlsPoliciesGetIamPolicyResponse {
    public String contentType;
    public NetworksecurityProjectsLocationsServerTlsPoliciesGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleIamV1Policy googleIamV1Policy;
    public NetworksecurityProjectsLocationsServerTlsPoliciesGetIamPolicyResponse withGoogleIamV1Policy(openapisdk.models.shared.GoogleIamV1Policy googleIamV1Policy) {
        this.googleIamV1Policy = googleIamV1Policy;
        return this;
    }
    public Long statusCode;
    public NetworksecurityProjectsLocationsServerTlsPoliciesGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}