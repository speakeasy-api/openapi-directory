package openapisdk.models.operations;



public class SqlDatabasesListResponse {
    public String contentType;
    public SqlDatabasesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DatabasesListResponse databasesListResponse;
    public SqlDatabasesListResponse withDatabasesListResponse(openapisdk.models.shared.DatabasesListResponse databasesListResponse) {
        this.databasesListResponse = databasesListResponse;
        return this;
    }
    public Long statusCode;
    public SqlDatabasesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}