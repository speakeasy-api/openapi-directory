package openapisdk.models.operations;



public class BinaryauthorizationProjectsPolicyGetIamPolicyRequest {
    public BinaryauthorizationProjectsPolicyGetIamPolicyPathParams pathParams;
    public BinaryauthorizationProjectsPolicyGetIamPolicyRequest withPathParams(BinaryauthorizationProjectsPolicyGetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BinaryauthorizationProjectsPolicyGetIamPolicyQueryParams queryParams;
    public BinaryauthorizationProjectsPolicyGetIamPolicyRequest withQueryParams(BinaryauthorizationProjectsPolicyGetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BinaryauthorizationProjectsPolicyGetIamPolicySecurity security;
    public BinaryauthorizationProjectsPolicyGetIamPolicyRequest withSecurity(BinaryauthorizationProjectsPolicyGetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}