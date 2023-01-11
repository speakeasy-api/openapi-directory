package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssuredworkloadsOrganizationsLocationsWorkloadsCreateRequest {
    public AssuredworkloadsOrganizationsLocationsWorkloadsCreatePathParams pathParams;
    public AssuredworkloadsOrganizationsLocationsWorkloadsCreateRequest withPathParams(AssuredworkloadsOrganizationsLocationsWorkloadsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AssuredworkloadsOrganizationsLocationsWorkloadsCreateQueryParams queryParams;
    public AssuredworkloadsOrganizationsLocationsWorkloadsCreateRequest withQueryParams(AssuredworkloadsOrganizationsLocationsWorkloadsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudAssuredworkloadsV1WorkloadInput request;
    public AssuredworkloadsOrganizationsLocationsWorkloadsCreateRequest withRequest(openapisdk.models.shared.GoogleCloudAssuredworkloadsV1WorkloadInput request) {
        this.request = request;
        return this;
    }
    public AssuredworkloadsOrganizationsLocationsWorkloadsCreateSecurity security;
    public AssuredworkloadsOrganizationsLocationsWorkloadsCreateRequest withSecurity(AssuredworkloadsOrganizationsLocationsWorkloadsCreateSecurity security) {
        this.security = security;
        return this;
    }
}