package openapisdk.models.operations;



public class UpdateCallFeedbackResponse {
    public String contentType;
    public UpdateCallFeedbackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateCallFeedbackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountCallCallFeedback apiV2010AccountCallCallFeedback;
    public UpdateCallFeedbackResponse withApiV2010AccountCallCallFeedback(openapisdk.models.shared.ApiV2010AccountCallCallFeedback apiV2010AccountCallCallFeedback) {
        this.apiV2010AccountCallCallFeedback = apiV2010AccountCallCallFeedback;
        return this;
    }
}