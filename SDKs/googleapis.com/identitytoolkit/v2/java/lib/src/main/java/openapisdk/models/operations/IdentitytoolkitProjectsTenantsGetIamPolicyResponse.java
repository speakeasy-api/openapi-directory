package openapisdk.models.operations;



public class IdentitytoolkitProjectsTenantsGetIamPolicyResponse {
    public String contentType;
    public IdentitytoolkitProjectsTenantsGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleIamV1Policy googleIamV1Policy;
    public IdentitytoolkitProjectsTenantsGetIamPolicyResponse withGoogleIamV1Policy(openapisdk.models.shared.GoogleIamV1Policy googleIamV1Policy) {
        this.googleIamV1Policy = googleIamV1Policy;
        return this;
    }
    public Long statusCode;
    public IdentitytoolkitProjectsTenantsGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}