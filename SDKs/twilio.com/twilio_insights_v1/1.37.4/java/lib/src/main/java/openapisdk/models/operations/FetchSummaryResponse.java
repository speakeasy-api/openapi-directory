package openapisdk.models.operations;



public class FetchSummaryResponse {
    public String contentType;
    public FetchSummaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSummaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.InsightsV1CallSummary insightsV1CallSummary;
    public FetchSummaryResponse withInsightsV1CallSummary(openapisdk.models.shared.InsightsV1CallSummary insightsV1CallSummary) {
        this.insightsV1CallSummary = insightsV1CallSummary;
        return this;
    }
}