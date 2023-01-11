package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IamProjectsServiceAccountsSetIamPolicyRequest {
    public IamProjectsServiceAccountsSetIamPolicyPathParams pathParams;
    public IamProjectsServiceAccountsSetIamPolicyRequest withPathParams(IamProjectsServiceAccountsSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IamProjectsServiceAccountsSetIamPolicyQueryParams queryParams;
    public IamProjectsServiceAccountsSetIamPolicyRequest withQueryParams(IamProjectsServiceAccountsSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public IamProjectsServiceAccountsSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public IamProjectsServiceAccountsSetIamPolicySecurity security;
    public IamProjectsServiceAccountsSetIamPolicyRequest withSecurity(IamProjectsServiceAccountsSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}