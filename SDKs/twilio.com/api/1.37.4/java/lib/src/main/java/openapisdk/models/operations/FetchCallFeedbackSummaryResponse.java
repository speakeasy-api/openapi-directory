package openapisdk.models.operations;



public class FetchCallFeedbackSummaryResponse {
    public String contentType;
    public FetchCallFeedbackSummaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchCallFeedbackSummaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountCallCallFeedbackSummary apiV2010AccountCallCallFeedbackSummary;
    public FetchCallFeedbackSummaryResponse withApiV2010AccountCallCallFeedbackSummary(openapisdk.models.shared.ApiV2010AccountCallCallFeedbackSummary apiV2010AccountCallCallFeedbackSummary) {
        this.apiV2010AccountCallCallFeedbackSummary = apiV2010AccountCallCallFeedbackSummary;
        return this;
    }
}