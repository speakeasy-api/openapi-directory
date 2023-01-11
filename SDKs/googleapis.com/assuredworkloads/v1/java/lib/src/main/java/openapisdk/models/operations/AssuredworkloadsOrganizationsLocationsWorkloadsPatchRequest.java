package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssuredworkloadsOrganizationsLocationsWorkloadsPatchRequest {
    public AssuredworkloadsOrganizationsLocationsWorkloadsPatchPathParams pathParams;
    public AssuredworkloadsOrganizationsLocationsWorkloadsPatchRequest withPathParams(AssuredworkloadsOrganizationsLocationsWorkloadsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AssuredworkloadsOrganizationsLocationsWorkloadsPatchQueryParams queryParams;
    public AssuredworkloadsOrganizationsLocationsWorkloadsPatchRequest withQueryParams(AssuredworkloadsOrganizationsLocationsWorkloadsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudAssuredworkloadsV1WorkloadInput request;
    public AssuredworkloadsOrganizationsLocationsWorkloadsPatchRequest withRequest(openapisdk.models.shared.GoogleCloudAssuredworkloadsV1WorkloadInput request) {
        this.request = request;
        return this;
    }
    public AssuredworkloadsOrganizationsLocationsWorkloadsPatchSecurity security;
    public AssuredworkloadsOrganizationsLocationsWorkloadsPatchRequest withSecurity(AssuredworkloadsOrganizationsLocationsWorkloadsPatchSecurity security) {
        this.security = security;
        return this;
    }
}