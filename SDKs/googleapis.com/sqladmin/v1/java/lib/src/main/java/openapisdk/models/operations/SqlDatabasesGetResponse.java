package openapisdk.models.operations;



public class SqlDatabasesGetResponse {
    public String contentType;
    public SqlDatabasesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Database database;
    public SqlDatabasesGetResponse withDatabase(openapisdk.models.shared.Database database) {
        this.database = database;
        return this;
    }
    public Long statusCode;
    public SqlDatabasesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}