package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtasksProjectsLocationsQueuesGetIamPolicyRequest {
    public CloudtasksProjectsLocationsQueuesGetIamPolicyPathParams pathParams;
    public CloudtasksProjectsLocationsQueuesGetIamPolicyRequest withPathParams(CloudtasksProjectsLocationsQueuesGetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudtasksProjectsLocationsQueuesGetIamPolicyQueryParams queryParams;
    public CloudtasksProjectsLocationsQueuesGetIamPolicyRequest withQueryParams(CloudtasksProjectsLocationsQueuesGetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetIamPolicyRequest request;
    public CloudtasksProjectsLocationsQueuesGetIamPolicyRequest withRequest(openapisdk.models.shared.GetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public CloudtasksProjectsLocationsQueuesGetIamPolicySecurity security;
    public CloudtasksProjectsLocationsQueuesGetIamPolicyRequest withSecurity(CloudtasksProjectsLocationsQueuesGetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}