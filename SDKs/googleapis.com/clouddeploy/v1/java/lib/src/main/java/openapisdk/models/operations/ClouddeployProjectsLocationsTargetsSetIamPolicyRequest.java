package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClouddeployProjectsLocationsTargetsSetIamPolicyRequest {
    public ClouddeployProjectsLocationsTargetsSetIamPolicyPathParams pathParams;
    public ClouddeployProjectsLocationsTargetsSetIamPolicyRequest withPathParams(ClouddeployProjectsLocationsTargetsSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClouddeployProjectsLocationsTargetsSetIamPolicyQueryParams queryParams;
    public ClouddeployProjectsLocationsTargetsSetIamPolicyRequest withQueryParams(ClouddeployProjectsLocationsTargetsSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public ClouddeployProjectsLocationsTargetsSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public ClouddeployProjectsLocationsTargetsSetIamPolicySecurity security;
    public ClouddeployProjectsLocationsTargetsSetIamPolicyRequest withSecurity(ClouddeployProjectsLocationsTargetsSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}