package openapisdk.models.operations;



public class FetchCallResponse {
    public String contentType;
    public FetchCallResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchCallResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.InsightsV1Call insightsV1Call;
    public FetchCallResponse withInsightsV1Call(openapisdk.models.shared.InsightsV1Call insightsV1Call) {
        this.insightsV1Call = insightsV1Call;
        return this;
    }
}