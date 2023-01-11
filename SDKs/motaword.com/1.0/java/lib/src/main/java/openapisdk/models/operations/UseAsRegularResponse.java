package openapisdk.models.operations;



public class UseAsRegularResponse {
    public String contentType;
    public UseAsRegularResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OperationStatus operationStatus;
    public UseAsRegularResponse withOperationStatus(openapisdk.models.shared.OperationStatus operationStatus) {
        this.operationStatus = operationStatus;
        return this;
    }
    public Long statusCode;
    public UseAsRegularResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}