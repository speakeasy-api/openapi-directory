package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RuntimeconfigProjectsConfigsSetIamPolicyRequest {
    public RuntimeconfigProjectsConfigsSetIamPolicyPathParams pathParams;
    public RuntimeconfigProjectsConfigsSetIamPolicyRequest withPathParams(RuntimeconfigProjectsConfigsSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RuntimeconfigProjectsConfigsSetIamPolicyQueryParams queryParams;
    public RuntimeconfigProjectsConfigsSetIamPolicyRequest withQueryParams(RuntimeconfigProjectsConfigsSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public RuntimeconfigProjectsConfigsSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public RuntimeconfigProjectsConfigsSetIamPolicySecurity security;
    public RuntimeconfigProjectsConfigsSetIamPolicyRequest withSecurity(RuntimeconfigProjectsConfigsSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}