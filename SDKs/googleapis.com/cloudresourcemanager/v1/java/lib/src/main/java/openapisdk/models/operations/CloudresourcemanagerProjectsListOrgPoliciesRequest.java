package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerProjectsListOrgPoliciesRequest {
    public CloudresourcemanagerProjectsListOrgPoliciesPathParams pathParams;
    public CloudresourcemanagerProjectsListOrgPoliciesRequest withPathParams(CloudresourcemanagerProjectsListOrgPoliciesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudresourcemanagerProjectsListOrgPoliciesQueryParams queryParams;
    public CloudresourcemanagerProjectsListOrgPoliciesRequest withQueryParams(CloudresourcemanagerProjectsListOrgPoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListOrgPoliciesRequest request;
    public CloudresourcemanagerProjectsListOrgPoliciesRequest withRequest(openapisdk.models.shared.ListOrgPoliciesRequest request) {
        this.request = request;
        return this;
    }
    public CloudresourcemanagerProjectsListOrgPoliciesSecurity security;
    public CloudresourcemanagerProjectsListOrgPoliciesRequest withSecurity(CloudresourcemanagerProjectsListOrgPoliciesSecurity security) {
        this.security = security;
        return this;
    }
}