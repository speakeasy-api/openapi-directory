package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatafusionProjectsLocationsInstancesSetIamPolicyRequest {
    public DatafusionProjectsLocationsInstancesSetIamPolicyPathParams pathParams;
    public DatafusionProjectsLocationsInstancesSetIamPolicyRequest withPathParams(DatafusionProjectsLocationsInstancesSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatafusionProjectsLocationsInstancesSetIamPolicyQueryParams queryParams;
    public DatafusionProjectsLocationsInstancesSetIamPolicyRequest withQueryParams(DatafusionProjectsLocationsInstancesSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public DatafusionProjectsLocationsInstancesSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public DatafusionProjectsLocationsInstancesSetIamPolicySecurity security;
    public DatafusionProjectsLocationsInstancesSetIamPolicyRequest withSecurity(DatafusionProjectsLocationsInstancesSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}