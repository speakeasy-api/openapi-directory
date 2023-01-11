package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Area120tablesTablesRowsBatchDeleteRequest {
    public Area120tablesTablesRowsBatchDeletePathParams pathParams;
    public Area120tablesTablesRowsBatchDeleteRequest withPathParams(Area120tablesTablesRowsBatchDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public Area120tablesTablesRowsBatchDeleteQueryParams queryParams;
    public Area120tablesTablesRowsBatchDeleteRequest withQueryParams(Area120tablesTablesRowsBatchDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchDeleteRowsRequest request;
    public Area120tablesTablesRowsBatchDeleteRequest withRequest(openapisdk.models.shared.BatchDeleteRowsRequest request) {
        this.request = request;
        return this;
    }
    public Area120tablesTablesRowsBatchDeleteSecurity security;
    public Area120tablesTablesRowsBatchDeleteRequest withSecurity(Area120tablesTablesRowsBatchDeleteSecurity security) {
        this.security = security;
        return this;
    }
}