package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatamigrationProjectsLocationsMigrationJobsStopRequest {
    public DatamigrationProjectsLocationsMigrationJobsStopPathParams pathParams;
    public DatamigrationProjectsLocationsMigrationJobsStopRequest withPathParams(DatamigrationProjectsLocationsMigrationJobsStopPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatamigrationProjectsLocationsMigrationJobsStopQueryParams queryParams;
    public DatamigrationProjectsLocationsMigrationJobsStopRequest withQueryParams(DatamigrationProjectsLocationsMigrationJobsStopQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DatamigrationProjectsLocationsMigrationJobsStopRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public DatamigrationProjectsLocationsMigrationJobsStopSecurity security;
    public DatamigrationProjectsLocationsMigrationJobsStopRequest withSecurity(DatamigrationProjectsLocationsMigrationJobsStopSecurity security) {
        this.security = security;
        return this;
    }
}