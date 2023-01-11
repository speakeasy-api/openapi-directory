package openapisdk.models.operations;



public class BinaryauthorizationSystempolicyGetPolicyResponse {
    public String contentType;
    public BinaryauthorizationSystempolicyGetPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public BinaryauthorizationSystempolicyGetPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public BinaryauthorizationSystempolicyGetPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}