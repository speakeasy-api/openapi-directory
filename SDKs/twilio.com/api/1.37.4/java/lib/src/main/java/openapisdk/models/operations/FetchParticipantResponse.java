package openapisdk.models.operations;



public class FetchParticipantResponse {
    public String contentType;
    public FetchParticipantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchParticipantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountConferenceParticipant apiV2010AccountConferenceParticipant;
    public FetchParticipantResponse withApiV2010AccountConferenceParticipant(openapisdk.models.shared.ApiV2010AccountConferenceParticipant apiV2010AccountConferenceParticipant) {
        this.apiV2010AccountConferenceParticipant = apiV2010AccountConferenceParticipant;
        return this;
    }
}