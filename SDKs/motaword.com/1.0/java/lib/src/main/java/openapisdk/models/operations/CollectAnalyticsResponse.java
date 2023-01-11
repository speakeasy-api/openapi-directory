package openapisdk.models.operations;



public class CollectAnalyticsResponse {
    public String contentType;
    public CollectAnalyticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OperationStatus operationStatus;
    public CollectAnalyticsResponse withOperationStatus(openapisdk.models.shared.OperationStatus operationStatus) {
        this.operationStatus = operationStatus;
        return this;
    }
    public Long statusCode;
    public CollectAnalyticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}