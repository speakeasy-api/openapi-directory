package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsRequest {
    public CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsPathParams pathParams;
    public CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsRequest withPathParams(CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsQueryParams queryParams;
    public CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsRequest withQueryParams(CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListAvailableOrgPolicyConstraintsRequest request;
    public CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsRequest withRequest(openapisdk.models.shared.ListAvailableOrgPolicyConstraintsRequest request) {
        this.request = request;
        return this;
    }
    public CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurity security;
    public CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsRequest withSecurity(CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurity security) {
        this.security = security;
        return this;
    }
}