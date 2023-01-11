package openapisdk.models.operations;



public class AlertcenterAlertsUndeleteResponse {
    public openapisdk.models.shared.Alert alert;
    public AlertcenterAlertsUndeleteResponse withAlert(openapisdk.models.shared.Alert alert) {
        this.alert = alert;
        return this;
    }
    public String contentType;
    public AlertcenterAlertsUndeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AlertcenterAlertsUndeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}