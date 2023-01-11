package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VmmigrationProjectsLocationsGroupsCreateRequest {
    public VmmigrationProjectsLocationsGroupsCreatePathParams pathParams;
    public VmmigrationProjectsLocationsGroupsCreateRequest withPathParams(VmmigrationProjectsLocationsGroupsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VmmigrationProjectsLocationsGroupsCreateQueryParams queryParams;
    public VmmigrationProjectsLocationsGroupsCreateRequest withQueryParams(VmmigrationProjectsLocationsGroupsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GroupInput request;
    public VmmigrationProjectsLocationsGroupsCreateRequest withRequest(openapisdk.models.shared.GroupInput request) {
        this.request = request;
        return this;
    }
    public VmmigrationProjectsLocationsGroupsCreateSecurity security;
    public VmmigrationProjectsLocationsGroupsCreateRequest withSecurity(VmmigrationProjectsLocationsGroupsCreateSecurity security) {
        this.security = security;
        return this;
    }
}