package openapisdk.models.operations;



public class UpdateParticipantResponse {
    public String contentType;
    public UpdateParticipantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateParticipantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountConferenceParticipant apiV2010AccountConferenceParticipant;
    public UpdateParticipantResponse withApiV2010AccountConferenceParticipant(openapisdk.models.shared.ApiV2010AccountConferenceParticipant apiV2010AccountConferenceParticipant) {
        this.apiV2010AccountConferenceParticipant = apiV2010AccountConferenceParticipant;
        return this;
    }
}