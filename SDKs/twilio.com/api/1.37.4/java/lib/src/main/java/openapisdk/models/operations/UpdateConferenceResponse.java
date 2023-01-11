package openapisdk.models.operations;



public class UpdateConferenceResponse {
    public String contentType;
    public UpdateConferenceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateConferenceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountConference apiV2010AccountConference;
    public UpdateConferenceResponse withApiV2010AccountConference(openapisdk.models.shared.ApiV2010AccountConference apiV2010AccountConference) {
        this.apiV2010AccountConference = apiV2010AccountConference;
        return this;
    }
}