package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatamigrationProjectsLocationsMigrationJobsPatchRequest {
    public DatamigrationProjectsLocationsMigrationJobsPatchPathParams pathParams;
    public DatamigrationProjectsLocationsMigrationJobsPatchRequest withPathParams(DatamigrationProjectsLocationsMigrationJobsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatamigrationProjectsLocationsMigrationJobsPatchQueryParams queryParams;
    public DatamigrationProjectsLocationsMigrationJobsPatchRequest withQueryParams(DatamigrationProjectsLocationsMigrationJobsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MigrationJobInput request;
    public DatamigrationProjectsLocationsMigrationJobsPatchRequest withRequest(openapisdk.models.shared.MigrationJobInput request) {
        this.request = request;
        return this;
    }
    public DatamigrationProjectsLocationsMigrationJobsPatchSecurity security;
    public DatamigrationProjectsLocationsMigrationJobsPatchRequest withSecurity(DatamigrationProjectsLocationsMigrationJobsPatchSecurity security) {
        this.security = security;
        return this;
    }
}