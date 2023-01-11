package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatamigrationProjectsLocationsMigrationJobsStartRequest {
    public DatamigrationProjectsLocationsMigrationJobsStartPathParams pathParams;
    public DatamigrationProjectsLocationsMigrationJobsStartRequest withPathParams(DatamigrationProjectsLocationsMigrationJobsStartPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatamigrationProjectsLocationsMigrationJobsStartQueryParams queryParams;
    public DatamigrationProjectsLocationsMigrationJobsStartRequest withQueryParams(DatamigrationProjectsLocationsMigrationJobsStartQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DatamigrationProjectsLocationsMigrationJobsStartRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public DatamigrationProjectsLocationsMigrationJobsStartSecurity security;
    public DatamigrationProjectsLocationsMigrationJobsStartRequest withSecurity(DatamigrationProjectsLocationsMigrationJobsStartSecurity security) {
        this.security = security;
        return this;
    }
}