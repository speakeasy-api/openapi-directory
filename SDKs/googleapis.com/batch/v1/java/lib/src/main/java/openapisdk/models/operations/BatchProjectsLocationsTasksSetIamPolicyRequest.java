package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchProjectsLocationsTasksSetIamPolicyRequest {
    public BatchProjectsLocationsTasksSetIamPolicyPathParams pathParams;
    public BatchProjectsLocationsTasksSetIamPolicyRequest withPathParams(BatchProjectsLocationsTasksSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BatchProjectsLocationsTasksSetIamPolicyQueryParams queryParams;
    public BatchProjectsLocationsTasksSetIamPolicyRequest withQueryParams(BatchProjectsLocationsTasksSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public BatchProjectsLocationsTasksSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public BatchProjectsLocationsTasksSetIamPolicySecurity security;
    public BatchProjectsLocationsTasksSetIamPolicyRequest withSecurity(BatchProjectsLocationsTasksSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}