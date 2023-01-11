package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyRequest {
    public CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyPathParams pathParams;
    public CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyRequest withPathParams(CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyQueryParams queryParams;
    public CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyRequest withQueryParams(CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurity security;
    public CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyRequest withSecurity(CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}