package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunProjectsLocationsServicesSetIamPolicyRequest {
    public RunProjectsLocationsServicesSetIamPolicyPathParams pathParams;
    public RunProjectsLocationsServicesSetIamPolicyRequest withPathParams(RunProjectsLocationsServicesSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RunProjectsLocationsServicesSetIamPolicyQueryParams queryParams;
    public RunProjectsLocationsServicesSetIamPolicyRequest withQueryParams(RunProjectsLocationsServicesSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public RunProjectsLocationsServicesSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public RunProjectsLocationsServicesSetIamPolicySecurity security;
    public RunProjectsLocationsServicesSetIamPolicyRequest withSecurity(RunProjectsLocationsServicesSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}