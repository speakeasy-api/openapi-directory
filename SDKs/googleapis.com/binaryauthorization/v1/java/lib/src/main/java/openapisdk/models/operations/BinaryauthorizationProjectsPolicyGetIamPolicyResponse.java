package openapisdk.models.operations;



public class BinaryauthorizationProjectsPolicyGetIamPolicyResponse {
    public String contentType;
    public BinaryauthorizationProjectsPolicyGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.IamPolicy iamPolicy;
    public BinaryauthorizationProjectsPolicyGetIamPolicyResponse withIamPolicy(openapisdk.models.shared.IamPolicy iamPolicy) {
        this.iamPolicy = iamPolicy;
        return this;
    }
    public Long statusCode;
    public BinaryauthorizationProjectsPolicyGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}