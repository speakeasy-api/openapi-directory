package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatamigrationProjectsLocationsMigrationJobsSetIamPolicyRequest {
    public DatamigrationProjectsLocationsMigrationJobsSetIamPolicyPathParams pathParams;
    public DatamigrationProjectsLocationsMigrationJobsSetIamPolicyRequest withPathParams(DatamigrationProjectsLocationsMigrationJobsSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatamigrationProjectsLocationsMigrationJobsSetIamPolicyQueryParams queryParams;
    public DatamigrationProjectsLocationsMigrationJobsSetIamPolicyRequest withQueryParams(DatamigrationProjectsLocationsMigrationJobsSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public DatamigrationProjectsLocationsMigrationJobsSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public DatamigrationProjectsLocationsMigrationJobsSetIamPolicySecurity security;
    public DatamigrationProjectsLocationsMigrationJobsSetIamPolicyRequest withSecurity(DatamigrationProjectsLocationsMigrationJobsSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}