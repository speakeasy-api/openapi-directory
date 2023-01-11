package openapisdk.models.operations;



public class AlertcenterAlertsFeedbackCreateResponse {
    public openapisdk.models.shared.AlertFeedback alertFeedback;
    public AlertcenterAlertsFeedbackCreateResponse withAlertFeedback(openapisdk.models.shared.AlertFeedback alertFeedback) {
        this.alertFeedback = alertFeedback;
        return this;
    }
    public String contentType;
    public AlertcenterAlertsFeedbackCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AlertcenterAlertsFeedbackCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}