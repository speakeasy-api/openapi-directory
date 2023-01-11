package openapisdk.models.operations;



public class BinaryauthorizationProjectsPolicySetIamPolicyResponse {
    public String contentType;
    public BinaryauthorizationProjectsPolicySetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.IamPolicy iamPolicy;
    public BinaryauthorizationProjectsPolicySetIamPolicyResponse withIamPolicy(openapisdk.models.shared.IamPolicy iamPolicy) {
        this.iamPolicy = iamPolicy;
        return this;
    }
    public Long statusCode;
    public BinaryauthorizationProjectsPolicySetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}