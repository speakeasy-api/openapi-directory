package openapisdk.models.operations;



public class SqlInstancesRotateServerCaResponse {
    public String contentType;
    public SqlInstancesRotateServerCaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public SqlInstancesRotateServerCaResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public SqlInstancesRotateServerCaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}