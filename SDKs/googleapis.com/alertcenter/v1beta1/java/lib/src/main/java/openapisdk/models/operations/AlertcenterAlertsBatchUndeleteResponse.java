package openapisdk.models.operations;



public class AlertcenterAlertsBatchUndeleteResponse {
    public openapisdk.models.shared.BatchUndeleteAlertsResponse batchUndeleteAlertsResponse;
    public AlertcenterAlertsBatchUndeleteResponse withBatchUndeleteAlertsResponse(openapisdk.models.shared.BatchUndeleteAlertsResponse batchUndeleteAlertsResponse) {
        this.batchUndeleteAlertsResponse = batchUndeleteAlertsResponse;
        return this;
    }
    public String contentType;
    public AlertcenterAlertsBatchUndeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AlertcenterAlertsBatchUndeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}