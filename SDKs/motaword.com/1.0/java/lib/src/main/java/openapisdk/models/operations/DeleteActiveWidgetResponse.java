package openapisdk.models.operations;



public class DeleteActiveWidgetResponse {
    public String contentType;
    public DeleteActiveWidgetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public DeleteActiveWidgetResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.OperationStatus operationStatus;
    public DeleteActiveWidgetResponse withOperationStatus(openapisdk.models.shared.OperationStatus operationStatus) {
        this.operationStatus = operationStatus;
        return this;
    }
    public Long statusCode;
    public DeleteActiveWidgetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}