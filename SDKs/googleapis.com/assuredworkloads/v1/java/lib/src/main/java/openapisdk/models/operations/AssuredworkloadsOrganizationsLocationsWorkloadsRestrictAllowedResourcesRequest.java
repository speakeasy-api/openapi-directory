package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesRequest {
    public AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesPathParams pathParams;
    public AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesRequest withPathParams(AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesQueryParams queryParams;
    public AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesRequest withQueryParams(AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequest request;
    public AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesRequest withRequest(openapisdk.models.shared.GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequest request) {
        this.request = request;
        return this;
    }
    public AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesSecurity security;
    public AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesRequest withSecurity(AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesSecurity security) {
        this.security = security;
        return this;
    }
}