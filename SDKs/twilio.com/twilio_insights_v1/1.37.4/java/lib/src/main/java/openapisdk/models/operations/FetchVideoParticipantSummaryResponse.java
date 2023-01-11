package openapisdk.models.operations;



public class FetchVideoParticipantSummaryResponse {
    public String contentType;
    public FetchVideoParticipantSummaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchVideoParticipantSummaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.InsightsV1VideoRoomSummaryVideoParticipantSummary insightsV1VideoRoomSummaryVideoParticipantSummary;
    public FetchVideoParticipantSummaryResponse withInsightsV1VideoRoomSummaryVideoParticipantSummary(openapisdk.models.shared.InsightsV1VideoRoomSummaryVideoParticipantSummary insightsV1VideoRoomSummaryVideoParticipantSummary) {
        this.insightsV1VideoRoomSummaryVideoParticipantSummary = insightsV1VideoRoomSummaryVideoParticipantSummary;
        return this;
    }
}