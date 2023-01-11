package openapisdk.models.operations;



public class DowngradeUserProofreaderResponse {
    public String contentType;
    public DowngradeUserProofreaderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public DowngradeUserProofreaderResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.OperationStatus operationStatus;
    public DowngradeUserProofreaderResponse withOperationStatus(openapisdk.models.shared.OperationStatus operationStatus) {
        this.operationStatus = operationStatus;
        return this;
    }
    public Long statusCode;
    public DowngradeUserProofreaderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}