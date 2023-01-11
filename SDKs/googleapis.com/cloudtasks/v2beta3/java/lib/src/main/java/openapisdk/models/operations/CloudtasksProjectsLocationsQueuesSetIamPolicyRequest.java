package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtasksProjectsLocationsQueuesSetIamPolicyRequest {
    public CloudtasksProjectsLocationsQueuesSetIamPolicyPathParams pathParams;
    public CloudtasksProjectsLocationsQueuesSetIamPolicyRequest withPathParams(CloudtasksProjectsLocationsQueuesSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudtasksProjectsLocationsQueuesSetIamPolicyQueryParams queryParams;
    public CloudtasksProjectsLocationsQueuesSetIamPolicyRequest withQueryParams(CloudtasksProjectsLocationsQueuesSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public CloudtasksProjectsLocationsQueuesSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public CloudtasksProjectsLocationsQueuesSetIamPolicySecurity security;
    public CloudtasksProjectsLocationsQueuesSetIamPolicyRequest withSecurity(CloudtasksProjectsLocationsQueuesSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}