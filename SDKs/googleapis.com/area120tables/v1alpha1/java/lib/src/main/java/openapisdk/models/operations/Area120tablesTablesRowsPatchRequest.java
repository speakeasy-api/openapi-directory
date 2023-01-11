package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Area120tablesTablesRowsPatchRequest {
    public Area120tablesTablesRowsPatchPathParams pathParams;
    public Area120tablesTablesRowsPatchRequest withPathParams(Area120tablesTablesRowsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public Area120tablesTablesRowsPatchQueryParams queryParams;
    public Area120tablesTablesRowsPatchRequest withQueryParams(Area120tablesTablesRowsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Row request;
    public Area120tablesTablesRowsPatchRequest withRequest(openapisdk.models.shared.Row request) {
        this.request = request;
        return this;
    }
    public Area120tablesTablesRowsPatchSecurity security;
    public Area120tablesTablesRowsPatchRequest withSecurity(Area120tablesTablesRowsPatchSecurity security) {
        this.security = security;
        return this;
    }
}