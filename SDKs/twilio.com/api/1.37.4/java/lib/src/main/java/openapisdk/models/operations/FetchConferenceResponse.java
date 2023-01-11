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
    public openapisdk.models.shared.ApiV2010AccountConference apiV2010AccountConference;
    public FetchConferenceResponse withApiV2010AccountConference(openapisdk.models.shared.ApiV2010AccountConference apiV2010AccountConference) {
        this.apiV2010AccountConference = apiV2010AccountConference;
        return this;
    }
}