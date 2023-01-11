package openapisdk.models.operations;



public class SqlInstancesFailoverResponse {
    public String contentType;
    public SqlInstancesFailoverResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public SqlInstancesFailoverResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public SqlInstancesFailoverResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}