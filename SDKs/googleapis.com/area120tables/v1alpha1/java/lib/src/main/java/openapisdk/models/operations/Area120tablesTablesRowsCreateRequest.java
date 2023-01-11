package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Area120tablesTablesRowsCreateRequest {
    public Area120tablesTablesRowsCreatePathParams pathParams;
    public Area120tablesTablesRowsCreateRequest withPathParams(Area120tablesTablesRowsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public Area120tablesTablesRowsCreateQueryParams queryParams;
    public Area120tablesTablesRowsCreateRequest withQueryParams(Area120tablesTablesRowsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Row request;
    public Area120tablesTablesRowsCreateRequest withRequest(openapisdk.models.shared.Row request) {
        this.request = request;
        return this;
    }
    public Area120tablesTablesRowsCreateSecurity security;
    public Area120tablesTablesRowsCreateRequest withSecurity(Area120tablesTablesRowsCreateSecurity security) {
        this.security = security;
        return this;
    }
}