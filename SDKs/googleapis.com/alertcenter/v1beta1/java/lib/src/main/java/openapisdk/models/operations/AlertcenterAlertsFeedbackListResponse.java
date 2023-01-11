package openapisdk.models.operations;



public class AlertcenterAlertsFeedbackListResponse {
    public String contentType;
    public AlertcenterAlertsFeedbackListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAlertFeedbackResponse listAlertFeedbackResponse;
    public AlertcenterAlertsFeedbackListResponse withListAlertFeedbackResponse(openapisdk.models.shared.ListAlertFeedbackResponse listAlertFeedbackResponse) {
        this.listAlertFeedbackResponse = listAlertFeedbackResponse;
        return this;
    }
    public Long statusCode;
    public AlertcenterAlertsFeedbackListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}