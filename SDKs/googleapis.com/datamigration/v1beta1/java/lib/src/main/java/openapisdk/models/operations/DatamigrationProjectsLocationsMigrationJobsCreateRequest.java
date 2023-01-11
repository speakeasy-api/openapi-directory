package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatamigrationProjectsLocationsMigrationJobsCreateRequest {
    public DatamigrationProjectsLocationsMigrationJobsCreatePathParams pathParams;
    public DatamigrationProjectsLocationsMigrationJobsCreateRequest withPathParams(DatamigrationProjectsLocationsMigrationJobsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatamigrationProjectsLocationsMigrationJobsCreateQueryParams queryParams;
    public DatamigrationProjectsLocationsMigrationJobsCreateRequest withQueryParams(DatamigrationProjectsLocationsMigrationJobsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MigrationJobInput request;
    public DatamigrationProjectsLocationsMigrationJobsCreateRequest withRequest(openapisdk.models.shared.MigrationJobInput request) {
        this.request = request;
        return this;
    }
    public DatamigrationProjectsLocationsMigrationJobsCreateSecurity security;
    public DatamigrationProjectsLocationsMigrationJobsCreateRequest withSecurity(DatamigrationProjectsLocationsMigrationJobsCreateSecurity security) {
        this.security = security;
        return this;
    }
}