package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudfunctionsProjectsLocationsFunctionsSetIamPolicyRequest {
    public CloudfunctionsProjectsLocationsFunctionsSetIamPolicyPathParams pathParams;
    public CloudfunctionsProjectsLocationsFunctionsSetIamPolicyRequest withPathParams(CloudfunctionsProjectsLocationsFunctionsSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudfunctionsProjectsLocationsFunctionsSetIamPolicyQueryParams queryParams;
    public CloudfunctionsProjectsLocationsFunctionsSetIamPolicyRequest withQueryParams(CloudfunctionsProjectsLocationsFunctionsSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public CloudfunctionsProjectsLocationsFunctionsSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public CloudfunctionsProjectsLocationsFunctionsSetIamPolicySecurity security;
    public CloudfunctionsProjectsLocationsFunctionsSetIamPolicyRequest withSecurity(CloudfunctionsProjectsLocationsFunctionsSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}