package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatamigrationProjectsLocationsMigrationJobsResumeRequest {
    public DatamigrationProjectsLocationsMigrationJobsResumePathParams pathParams;
    public DatamigrationProjectsLocationsMigrationJobsResumeRequest withPathParams(DatamigrationProjectsLocationsMigrationJobsResumePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatamigrationProjectsLocationsMigrationJobsResumeQueryParams queryParams;
    public DatamigrationProjectsLocationsMigrationJobsResumeRequest withQueryParams(DatamigrationProjectsLocationsMigrationJobsResumeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DatamigrationProjectsLocationsMigrationJobsResumeRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public DatamigrationProjectsLocationsMigrationJobsResumeSecurity security;
    public DatamigrationProjectsLocationsMigrationJobsResumeRequest withSecurity(DatamigrationProjectsLocationsMigrationJobsResumeSecurity security) {
        this.security = security;
        return this;
    }
}