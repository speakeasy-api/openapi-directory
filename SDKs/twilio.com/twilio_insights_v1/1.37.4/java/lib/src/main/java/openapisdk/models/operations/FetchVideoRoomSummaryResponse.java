package openapisdk.models.operations;



public class FetchVideoRoomSummaryResponse {
    public String contentType;
    public FetchVideoRoomSummaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchVideoRoomSummaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.InsightsV1VideoRoomSummary insightsV1VideoRoomSummary;
    public FetchVideoRoomSummaryResponse withInsightsV1VideoRoomSummary(openapisdk.models.shared.InsightsV1VideoRoomSummary insightsV1VideoRoomSummary) {
        this.insightsV1VideoRoomSummary = insightsV1VideoRoomSummary;
        return this;
    }
}