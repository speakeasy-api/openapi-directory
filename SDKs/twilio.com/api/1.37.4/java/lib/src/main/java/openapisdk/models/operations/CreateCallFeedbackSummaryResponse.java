package openapisdk.models.operations;



public class CreateCallFeedbackSummaryResponse {
    public String contentType;
    public CreateCallFeedbackSummaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateCallFeedbackSummaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountCallCallFeedbackSummary apiV2010AccountCallCallFeedbackSummary;
    public CreateCallFeedbackSummaryResponse withApiV2010AccountCallCallFeedbackSummary(openapisdk.models.shared.ApiV2010AccountCallCallFeedbackSummary apiV2010AccountCallCallFeedbackSummary) {
        this.apiV2010AccountCallCallFeedbackSummary = apiV2010AccountCallCallFeedbackSummary;
        return this;
    }
}