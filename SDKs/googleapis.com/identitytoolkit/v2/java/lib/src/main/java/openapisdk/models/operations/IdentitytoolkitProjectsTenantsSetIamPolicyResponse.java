package openapisdk.models.operations;



public class IdentitytoolkitProjectsTenantsSetIamPolicyResponse {
    public String contentType;
    public IdentitytoolkitProjectsTenantsSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleIamV1Policy googleIamV1Policy;
    public IdentitytoolkitProjectsTenantsSetIamPolicyResponse withGoogleIamV1Policy(openapisdk.models.shared.GoogleIamV1Policy googleIamV1Policy) {
        this.googleIamV1Policy = googleIamV1Policy;
        return this;
    }
    public Long statusCode;
    public IdentitytoolkitProjectsTenantsSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}