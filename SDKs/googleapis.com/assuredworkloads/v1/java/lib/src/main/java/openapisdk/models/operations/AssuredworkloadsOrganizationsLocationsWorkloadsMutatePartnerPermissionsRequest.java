package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsRequest {
    public AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsPathParams pathParams;
    public AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsRequest withPathParams(AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsQueryParams queryParams;
    public AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsRequest withQueryParams(AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest request;
    public AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsRequest withRequest(openapisdk.models.shared.GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsSecurity security;
    public AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsRequest withSecurity(AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}