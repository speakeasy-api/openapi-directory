package openapisdk.models.operations;



public class AppengineAppsOperationsGetResponse {
    public String contentType;
    public AppengineAppsOperationsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public AppengineAppsOperationsGetResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public AppengineAppsOperationsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}