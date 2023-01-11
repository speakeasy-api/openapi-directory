package openapisdk.models.operations;



public class SqlInstancesAddServerCaResponse {
    public String contentType;
    public SqlInstancesAddServerCaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public SqlInstancesAddServerCaResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public SqlInstancesAddServerCaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}