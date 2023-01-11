package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyRequest {
    public DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyPathParams pathParams;
    public DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyRequest withPathParams(DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyQueryParams queryParams;
    public DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyRequest withQueryParams(DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public DatafusionProjectsLocationsInstancesNamespacesSetIamPolicySecurity security;
    public DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyRequest withSecurity(DatafusionProjectsLocationsInstancesNamespacesSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}