package openapisdk.models.operations;



public class AccesscontextmanagerOperationsGetResponse {
    public String contentType;
    public AccesscontextmanagerOperationsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public AccesscontextmanagerOperationsGetResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public AccesscontextmanagerOperationsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}