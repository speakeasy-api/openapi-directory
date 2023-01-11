package openapisdk.models.operations;



public class Area120tablesTablesRowsBatchUpdateResponse {
    public openapisdk.models.shared.BatchUpdateRowsResponse batchUpdateRowsResponse;
    public Area120tablesTablesRowsBatchUpdateResponse withBatchUpdateRowsResponse(openapisdk.models.shared.BatchUpdateRowsResponse batchUpdateRowsResponse) {
        this.batchUpdateRowsResponse = batchUpdateRowsResponse;
        return this;
    }
    public String contentType;
    public Area120tablesTablesRowsBatchUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public Area120tablesTablesRowsBatchUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}