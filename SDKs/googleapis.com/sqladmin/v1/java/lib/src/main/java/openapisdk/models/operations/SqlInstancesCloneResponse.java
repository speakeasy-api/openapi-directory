package openapisdk.models.operations;



public class SqlInstancesCloneResponse {
    public String contentType;
    public SqlInstancesCloneResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public SqlInstancesCloneResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public SqlInstancesCloneResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}