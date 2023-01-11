package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptRequest {
    public DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptPathParams pathParams;
    public DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptRequest withPathParams(DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptQueryParams queryParams;
    public DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptRequest withQueryParams(DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GenerateSshScriptRequest request;
    public DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptRequest withRequest(openapisdk.models.shared.GenerateSshScriptRequest request) {
        this.request = request;
        return this;
    }
    public DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptSecurity security;
    public DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptRequest withSecurity(DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptSecurity security) {
        this.security = security;
        return this;
    }
}