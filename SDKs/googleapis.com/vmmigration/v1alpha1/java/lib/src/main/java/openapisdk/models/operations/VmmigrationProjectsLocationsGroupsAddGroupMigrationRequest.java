package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest {
    public VmmigrationProjectsLocationsGroupsAddGroupMigrationPathParams pathParams;
    public VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest withPathParams(VmmigrationProjectsLocationsGroupsAddGroupMigrationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VmmigrationProjectsLocationsGroupsAddGroupMigrationQueryParams queryParams;
    public VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest withQueryParams(VmmigrationProjectsLocationsGroupsAddGroupMigrationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddGroupMigrationRequest request;
    public VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest withRequest(openapisdk.models.shared.AddGroupMigrationRequest request) {
        this.request = request;
        return this;
    }
    public VmmigrationProjectsLocationsGroupsAddGroupMigrationSecurity security;
    public VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest withSecurity(VmmigrationProjectsLocationsGroupsAddGroupMigrationSecurity security) {
        this.security = security;
        return this;
    }
}