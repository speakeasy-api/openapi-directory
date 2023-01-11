package openapisdk.models.operations;



public class SqlInstancesImportResponse {
    public String contentType;
    public SqlInstancesImportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public SqlInstancesImportResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public SqlInstancesImportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}