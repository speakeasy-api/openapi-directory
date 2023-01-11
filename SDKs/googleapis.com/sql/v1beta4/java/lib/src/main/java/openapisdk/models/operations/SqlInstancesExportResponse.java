package openapisdk.models.operations;



public class SqlInstancesExportResponse {
    public String contentType;
    public SqlInstancesExportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public SqlInstancesExportResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public SqlInstancesExportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}