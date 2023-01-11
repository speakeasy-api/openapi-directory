package openapisdk.models.operations;



public class FetchCallFeedbackResponse {
    public String contentType;
    public FetchCallFeedbackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchCallFeedbackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountCallCallFeedback apiV2010AccountCallCallFeedback;
    public FetchCallFeedbackResponse withApiV2010AccountCallCallFeedback(openapisdk.models.shared.ApiV2010AccountCallCallFeedback apiV2010AccountCallCallFeedback) {
        this.apiV2010AccountCallCallFeedback = apiV2010AccountCallCallFeedback;
        return this;
    }
}