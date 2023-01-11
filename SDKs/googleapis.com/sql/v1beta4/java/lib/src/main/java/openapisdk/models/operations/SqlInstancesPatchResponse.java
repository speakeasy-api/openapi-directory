package openapisdk.models.operations;



public class SqlInstancesPatchResponse {
    public String contentType;
    public SqlInstancesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public SqlInstancesPatchResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public SqlInstancesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}