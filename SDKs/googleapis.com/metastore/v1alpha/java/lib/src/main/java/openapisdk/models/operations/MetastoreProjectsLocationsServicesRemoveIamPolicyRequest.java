package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MetastoreProjectsLocationsServicesRemoveIamPolicyRequest {
    public MetastoreProjectsLocationsServicesRemoveIamPolicyPathParams pathParams;
    public MetastoreProjectsLocationsServicesRemoveIamPolicyRequest withPathParams(MetastoreProjectsLocationsServicesRemoveIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MetastoreProjectsLocationsServicesRemoveIamPolicyQueryParams queryParams;
    public MetastoreProjectsLocationsServicesRemoveIamPolicyRequest withQueryParams(MetastoreProjectsLocationsServicesRemoveIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public MetastoreProjectsLocationsServicesRemoveIamPolicyRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public MetastoreProjectsLocationsServicesRemoveIamPolicySecurity security;
    public MetastoreProjectsLocationsServicesRemoveIamPolicyRequest withSecurity(MetastoreProjectsLocationsServicesRemoveIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}