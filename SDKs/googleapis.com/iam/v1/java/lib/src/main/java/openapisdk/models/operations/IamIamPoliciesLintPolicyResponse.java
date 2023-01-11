package openapisdk.models.operations;



public class IamIamPoliciesLintPolicyResponse {
    public String contentType;
    public IamIamPoliciesLintPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LintPolicyResponse lintPolicyResponse;
    public IamIamPoliciesLintPolicyResponse withLintPolicyResponse(openapisdk.models.shared.LintPolicyResponse lintPolicyResponse) {
        this.lintPolicyResponse = lintPolicyResponse;
        return this;
    }
    public Long statusCode;
    public IamIamPoliciesLintPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}