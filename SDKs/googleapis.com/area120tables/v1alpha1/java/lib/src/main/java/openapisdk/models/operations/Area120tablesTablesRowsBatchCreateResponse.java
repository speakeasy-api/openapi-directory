package openapisdk.models.operations;



public class Area120tablesTablesRowsBatchCreateResponse {
    public openapisdk.models.shared.BatchCreateRowsResponse batchCreateRowsResponse;
    public Area120tablesTablesRowsBatchCreateResponse withBatchCreateRowsResponse(openapisdk.models.shared.BatchCreateRowsResponse batchCreateRowsResponse) {
        this.batchCreateRowsResponse = batchCreateRowsResponse;
        return this;
    }
    public String contentType;
    public Area120tablesTablesRowsBatchCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public Area120tablesTablesRowsBatchCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}