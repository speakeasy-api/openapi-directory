package openapisdk.models.operations;



public class IamProjectsServiceAccountsGetIamPolicyRequest {
    public IamProjectsServiceAccountsGetIamPolicyPathParams pathParams;
    public IamProjectsServiceAccountsGetIamPolicyRequest withPathParams(IamProjectsServiceAccountsGetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IamProjectsServiceAccountsGetIamPolicyQueryParams queryParams;
    public IamProjectsServiceAccountsGetIamPolicyRequest withQueryParams(IamProjectsServiceAccountsGetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public IamProjectsServiceAccountsGetIamPolicySecurity security;
    public IamProjectsServiceAccountsGetIamPolicyRequest withSecurity(IamProjectsServiceAccountsGetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}