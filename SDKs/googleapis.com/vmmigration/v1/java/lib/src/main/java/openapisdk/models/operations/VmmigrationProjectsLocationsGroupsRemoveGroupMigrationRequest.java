package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VmmigrationProjectsLocationsGroupsRemoveGroupMigrationRequest {
    public VmmigrationProjectsLocationsGroupsRemoveGroupMigrationPathParams pathParams;
    public VmmigrationProjectsLocationsGroupsRemoveGroupMigrationRequest withPathParams(VmmigrationProjectsLocationsGroupsRemoveGroupMigrationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VmmigrationProjectsLocationsGroupsRemoveGroupMigrationQueryParams queryParams;
    public VmmigrationProjectsLocationsGroupsRemoveGroupMigrationRequest withQueryParams(VmmigrationProjectsLocationsGroupsRemoveGroupMigrationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RemoveGroupMigrationRequest request;
    public VmmigrationProjectsLocationsGroupsRemoveGroupMigrationRequest withRequest(openapisdk.models.shared.RemoveGroupMigrationRequest request) {
        this.request = request;
        return this;
    }
    public VmmigrationProjectsLocationsGroupsRemoveGroupMigrationSecurity security;
    public VmmigrationProjectsLocationsGroupsRemoveGroupMigrationRequest withSecurity(VmmigrationProjectsLocationsGroupsRemoveGroupMigrationSecurity security) {
        this.security = security;
        return this;
    }
}