package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Area120tablesTablesRowsBatchUpdateRequest {
    public Area120tablesTablesRowsBatchUpdatePathParams pathParams;
    public Area120tablesTablesRowsBatchUpdateRequest withPathParams(Area120tablesTablesRowsBatchUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public Area120tablesTablesRowsBatchUpdateQueryParams queryParams;
    public Area120tablesTablesRowsBatchUpdateRequest withQueryParams(Area120tablesTablesRowsBatchUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchUpdateRowsRequest request;
    public Area120tablesTablesRowsBatchUpdateRequest withRequest(openapisdk.models.shared.BatchUpdateRowsRequest request) {
        this.request = request;
        return this;
    }
    public Area120tablesTablesRowsBatchUpdateSecurity security;
    public Area120tablesTablesRowsBatchUpdateRequest withSecurity(Area120tablesTablesRowsBatchUpdateSecurity security) {
        this.security = security;
        return this;
    }
}