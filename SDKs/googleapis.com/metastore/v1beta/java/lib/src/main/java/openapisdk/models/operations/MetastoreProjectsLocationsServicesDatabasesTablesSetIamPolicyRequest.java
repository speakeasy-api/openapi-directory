package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyRequest {
    public MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyPathParams pathParams;
    public MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyRequest withPathParams(MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyQueryParams queryParams;
    public MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyRequest withQueryParams(MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicySecurity security;
    public MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyRequest withSecurity(MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}