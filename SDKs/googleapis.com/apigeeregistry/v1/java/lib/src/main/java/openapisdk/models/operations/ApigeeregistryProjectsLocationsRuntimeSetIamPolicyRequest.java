package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigeeregistryProjectsLocationsRuntimeSetIamPolicyRequest {
    public ApigeeregistryProjectsLocationsRuntimeSetIamPolicyPathParams pathParams;
    public ApigeeregistryProjectsLocationsRuntimeSetIamPolicyRequest withPathParams(ApigeeregistryProjectsLocationsRuntimeSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApigeeregistryProjectsLocationsRuntimeSetIamPolicyQueryParams queryParams;
    public ApigeeregistryProjectsLocationsRuntimeSetIamPolicyRequest withQueryParams(ApigeeregistryProjectsLocationsRuntimeSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public ApigeeregistryProjectsLocationsRuntimeSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public ApigeeregistryProjectsLocationsRuntimeSetIamPolicySecurity security;
    public ApigeeregistryProjectsLocationsRuntimeSetIamPolicyRequest withSecurity(ApigeeregistryProjectsLocationsRuntimeSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}