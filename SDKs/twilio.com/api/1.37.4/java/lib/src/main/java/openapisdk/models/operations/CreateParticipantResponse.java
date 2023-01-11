package openapisdk.models.operations;



public class CreateParticipantResponse {
    public String contentType;
    public CreateParticipantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateParticipantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountConferenceParticipant apiV2010AccountConferenceParticipant;
    public CreateParticipantResponse withApiV2010AccountConferenceParticipant(openapisdk.models.shared.ApiV2010AccountConferenceParticipant apiV2010AccountConferenceParticipant) {
        this.apiV2010AccountConferenceParticipant = apiV2010AccountConferenceParticipant;
        return this;
    }
}