package openapisdk.models.operations;



public class BinaryauthorizationSystempolicyGetPolicyRequest {
    public BinaryauthorizationSystempolicyGetPolicyPathParams pathParams;
    public BinaryauthorizationSystempolicyGetPolicyRequest withPathParams(BinaryauthorizationSystempolicyGetPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BinaryauthorizationSystempolicyGetPolicyQueryParams queryParams;
    public BinaryauthorizationSystempolicyGetPolicyRequest withQueryParams(BinaryauthorizationSystempolicyGetPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BinaryauthorizationSystempolicyGetPolicySecurity security;
    public BinaryauthorizationSystempolicyGetPolicyRequest withSecurity(BinaryauthorizationSystempolicyGetPolicySecurity security) {
        this.security = security;
        return this;
    }
}