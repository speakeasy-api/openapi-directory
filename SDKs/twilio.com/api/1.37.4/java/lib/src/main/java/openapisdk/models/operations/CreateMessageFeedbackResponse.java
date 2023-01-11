package openapisdk.models.operations;



public class CreateMessageFeedbackResponse {
    public String contentType;
    public CreateMessageFeedbackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateMessageFeedbackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountMessageMessageFeedback apiV2010AccountMessageMessageFeedback;
    public CreateMessageFeedbackResponse withApiV2010AccountMessageMessageFeedback(openapisdk.models.shared.ApiV2010AccountMessageMessageFeedback apiV2010AccountMessageMessageFeedback) {
        this.apiV2010AccountMessageMessageFeedback = apiV2010AccountMessageMessageFeedback;
        return this;
    }
}