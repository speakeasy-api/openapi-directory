package openapisdk.models.operations;



public class NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicyResponse {
    public String contentType;
    public NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleIamV1Policy googleIamV1Policy;
    public NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicyResponse withGoogleIamV1Policy(openapisdk.models.shared.GoogleIamV1Policy googleIamV1Policy) {
        this.googleIamV1Policy = googleIamV1Policy;
        return this;
    }
    public Long statusCode;
    public NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}