package openapisdk.models.operations;



public class SendPasswordReminderResponse {
    public String contentType;
    public SendPasswordReminderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public SendPasswordReminderResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.OperationStatus operationStatus;
    public SendPasswordReminderResponse withOperationStatus(openapisdk.models.shared.OperationStatus operationStatus) {
        this.operationStatus = operationStatus;
        return this;
    }
    public Long statusCode;
    public SendPasswordReminderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}