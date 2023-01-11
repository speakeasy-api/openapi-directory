package openapisdk.models.operations;



public class AlertcenterAlertsGetResponse {
    public openapisdk.models.shared.Alert alert;
    public AlertcenterAlertsGetResponse withAlert(openapisdk.models.shared.Alert alert) {
        this.alert = alert;
        return this;
    }
    public String contentType;
    public AlertcenterAlertsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AlertcenterAlertsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}