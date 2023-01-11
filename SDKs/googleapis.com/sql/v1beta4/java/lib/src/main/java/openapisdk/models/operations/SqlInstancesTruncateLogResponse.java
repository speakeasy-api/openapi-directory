package openapisdk.models.operations;



public class SqlInstancesTruncateLogResponse {
    public String contentType;
    public SqlInstancesTruncateLogResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public SqlInstancesTruncateLogResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public SqlInstancesTruncateLogResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}