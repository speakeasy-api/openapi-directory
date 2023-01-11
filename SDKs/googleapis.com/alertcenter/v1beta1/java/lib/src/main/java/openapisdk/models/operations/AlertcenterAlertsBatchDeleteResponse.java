package openapisdk.models.operations;



public class AlertcenterAlertsBatchDeleteResponse {
    public openapisdk.models.shared.BatchDeleteAlertsResponse batchDeleteAlertsResponse;
    public AlertcenterAlertsBatchDeleteResponse withBatchDeleteAlertsResponse(openapisdk.models.shared.BatchDeleteAlertsResponse batchDeleteAlertsResponse) {
        this.batchDeleteAlertsResponse = batchDeleteAlertsResponse;
        return this;
    }
    public String contentType;
    public AlertcenterAlertsBatchDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AlertcenterAlertsBatchDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}