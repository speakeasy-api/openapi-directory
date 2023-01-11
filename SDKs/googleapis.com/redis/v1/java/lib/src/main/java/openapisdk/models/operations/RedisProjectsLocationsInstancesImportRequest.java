package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RedisProjectsLocationsInstancesImportRequest {
    public RedisProjectsLocationsInstancesImportPathParams pathParams;
    public RedisProjectsLocationsInstancesImportRequest withPathParams(RedisProjectsLocationsInstancesImportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RedisProjectsLocationsInstancesImportQueryParams queryParams;
    public RedisProjectsLocationsInstancesImportRequest withQueryParams(RedisProjectsLocationsInstancesImportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ImportInstanceRequest request;
    public RedisProjectsLocationsInstancesImportRequest withRequest(openapisdk.models.shared.ImportInstanceRequest request) {
        this.request = request;
        return this;
    }
    public RedisProjectsLocationsInstancesImportSecurity security;
    public RedisProjectsLocationsInstancesImportRequest withSecurity(RedisProjectsLocationsInstancesImportSecurity security) {
        this.security = security;
        return this;
    }
}