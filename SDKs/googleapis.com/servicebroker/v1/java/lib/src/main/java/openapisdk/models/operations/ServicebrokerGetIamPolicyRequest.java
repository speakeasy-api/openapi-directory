package openapisdk.models.operations;



public class ServicebrokerGetIamPolicyRequest {
    public ServicebrokerGetIamPolicyPathParams pathParams;
    public ServicebrokerGetIamPolicyRequest withPathParams(ServicebrokerGetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ServicebrokerGetIamPolicyQueryParams queryParams;
    public ServicebrokerGetIamPolicyRequest withQueryParams(ServicebrokerGetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ServicebrokerGetIamPolicySecurity security;
    public ServicebrokerGetIamPolicyRequest withSecurity(ServicebrokerGetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}