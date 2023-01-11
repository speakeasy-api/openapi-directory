package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RedisProjectsLocationsInstancesExportRequest {
    public RedisProjectsLocationsInstancesExportPathParams pathParams;
    public RedisProjectsLocationsInstancesExportRequest withPathParams(RedisProjectsLocationsInstancesExportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RedisProjectsLocationsInstancesExportQueryParams queryParams;
    public RedisProjectsLocationsInstancesExportRequest withQueryParams(RedisProjectsLocationsInstancesExportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ExportInstanceRequest request;
    public RedisProjectsLocationsInstancesExportRequest withRequest(openapisdk.models.shared.ExportInstanceRequest request) {
        this.request = request;
        return this;
    }
    public RedisProjectsLocationsInstancesExportSecurity security;
    public RedisProjectsLocationsInstancesExportRequest withSecurity(RedisProjectsLocationsInstancesExportSecurity security) {
        this.security = security;
        return this;
    }
}