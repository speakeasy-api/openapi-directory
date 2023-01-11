package openapisdk.models.operations;



public class FetchConferenceParticipantResponse {
    public String contentType;
    public FetchConferenceParticipantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchConferenceParticipantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.InsightsV1ConferenceConferenceParticipant insightsV1ConferenceConferenceParticipant;
    public FetchConferenceParticipantResponse withInsightsV1ConferenceConferenceParticipant(openapisdk.models.shared.InsightsV1ConferenceConferenceParticipant insightsV1ConferenceConferenceParticipant) {
        this.insightsV1ConferenceConferenceParticipant = insightsV1ConferenceConferenceParticipant;
        return this;
    }
}