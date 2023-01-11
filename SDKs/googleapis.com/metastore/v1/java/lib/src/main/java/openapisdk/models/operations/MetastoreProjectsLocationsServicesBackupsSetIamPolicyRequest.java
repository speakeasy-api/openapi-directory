package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MetastoreProjectsLocationsServicesBackupsSetIamPolicyRequest {
    public MetastoreProjectsLocationsServicesBackupsSetIamPolicyPathParams pathParams;
    public MetastoreProjectsLocationsServicesBackupsSetIamPolicyRequest withPathParams(MetastoreProjectsLocationsServicesBackupsSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MetastoreProjectsLocationsServicesBackupsSetIamPolicyQueryParams queryParams;
    public MetastoreProjectsLocationsServicesBackupsSetIamPolicyRequest withQueryParams(MetastoreProjectsLocationsServicesBackupsSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public MetastoreProjectsLocationsServicesBackupsSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public MetastoreProjectsLocationsServicesBackupsSetIamPolicySecurity security;
    public MetastoreProjectsLocationsServicesBackupsSetIamPolicyRequest withSecurity(MetastoreProjectsLocationsServicesBackupsSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}