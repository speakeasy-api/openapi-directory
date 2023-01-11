package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsRuntimesSetIamPolicyRequest {
    public NotebooksProjectsLocationsRuntimesSetIamPolicyPathParams pathParams;
    public NotebooksProjectsLocationsRuntimesSetIamPolicyRequest withPathParams(NotebooksProjectsLocationsRuntimesSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NotebooksProjectsLocationsRuntimesSetIamPolicyQueryParams queryParams;
    public NotebooksProjectsLocationsRuntimesSetIamPolicyRequest withQueryParams(NotebooksProjectsLocationsRuntimesSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public NotebooksProjectsLocationsRuntimesSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public NotebooksProjectsLocationsRuntimesSetIamPolicySecurity security;
    public NotebooksProjectsLocationsRuntimesSetIamPolicyRequest withSecurity(NotebooksProjectsLocationsRuntimesSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}