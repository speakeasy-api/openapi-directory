package openapisdk.models.operations;



public class JapaneseNameMatchFeedbackLoopResponse {
    public String contentType;
    public JapaneseNameMatchFeedbackLoopResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FeedbackLoopOut feedbackLoopOut;
    public JapaneseNameMatchFeedbackLoopResponse withFeedbackLoopOut(openapisdk.models.shared.FeedbackLoopOut feedbackLoopOut) {
        this.feedbackLoopOut = feedbackLoopOut;
        return this;
    }
    public Long statusCode;
    public JapaneseNameMatchFeedbackLoopResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}