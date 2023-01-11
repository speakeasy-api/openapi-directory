package openapisdk.models.operations;



public class FetchConferenceResponse {
    public String contentType;
    public FetchConferenceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchConferenceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.InsightsV1Conference insightsV1Conference;
    public FetchConferenceResponse withInsightsV1Conference(openapisdk.models.shared.InsightsV1Conference insightsV1Conference) {
        this.insightsV1Conference = insightsV1Conference;
        return this;
    }
}