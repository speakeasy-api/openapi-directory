package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Area120tablesTablesRowsBatchCreateRequest {
    public Area120tablesTablesRowsBatchCreatePathParams pathParams;
    public Area120tablesTablesRowsBatchCreateRequest withPathParams(Area120tablesTablesRowsBatchCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public Area120tablesTablesRowsBatchCreateQueryParams queryParams;
    public Area120tablesTablesRowsBatchCreateRequest withQueryParams(Area120tablesTablesRowsBatchCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchCreateRowsRequest request;
    public Area120tablesTablesRowsBatchCreateRequest withRequest(openapisdk.models.shared.BatchCreateRowsRequest request) {
        this.request = request;
        return this;
    }
    public Area120tablesTablesRowsBatchCreateSecurity security;
    public Area120tablesTablesRowsBatchCreateRequest withSecurity(Area120tablesTablesRowsBatchCreateSecurity security) {
        this.security = security;
        return this;
    }
}