package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataprocProjectsRegionsAutoscalingPoliciesCreateRequest {
    public DataprocProjectsRegionsAutoscalingPoliciesCreatePathParams pathParams;
    public DataprocProjectsRegionsAutoscalingPoliciesCreateRequest withPathParams(DataprocProjectsRegionsAutoscalingPoliciesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DataprocProjectsRegionsAutoscalingPoliciesCreateQueryParams queryParams;
    public DataprocProjectsRegionsAutoscalingPoliciesCreateRequest withQueryParams(DataprocProjectsRegionsAutoscalingPoliciesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AutoscalingPolicyInput request;
    public DataprocProjectsRegionsAutoscalingPoliciesCreateRequest withRequest(openapisdk.models.shared.AutoscalingPolicyInput request) {
        this.request = request;
        return this;
    }
    public DataprocProjectsRegionsAutoscalingPoliciesCreateSecurity security;
    public DataprocProjectsRegionsAutoscalingPoliciesCreateRequest withSecurity(DataprocProjectsRegionsAutoscalingPoliciesCreateSecurity security) {
        this.security = security;
        return this;
    }
}