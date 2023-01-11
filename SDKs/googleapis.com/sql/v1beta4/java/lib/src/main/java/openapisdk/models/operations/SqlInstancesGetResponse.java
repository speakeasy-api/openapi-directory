package openapisdk.models.operations;



public class SqlInstancesGetResponse {
    public String contentType;
    public SqlInstancesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DatabaseInstance databaseInstance;
    public SqlInstancesGetResponse withDatabaseInstance(openapisdk.models.shared.DatabaseInstance databaseInstance) {
        this.databaseInstance = databaseInstance;
        return this;
    }
    public Long statusCode;
    public SqlInstancesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}