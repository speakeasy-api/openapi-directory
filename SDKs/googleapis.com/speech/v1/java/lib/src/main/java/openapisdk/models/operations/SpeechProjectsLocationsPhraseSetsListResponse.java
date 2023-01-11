package openapisdk.models.operations;



public class SpeechProjectsLocationsPhraseSetsListResponse {
    public String contentType;
    public SpeechProjectsLocationsPhraseSetsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListPhraseSetResponse listPhraseSetResponse;
    public SpeechProjectsLocationsPhraseSetsListResponse withListPhraseSetResponse(openapisdk.models.shared.ListPhraseSetResponse listPhraseSetResponse) {
        this.listPhraseSetResponse = listPhraseSetResponse;
        return this;
    }
    public Long statusCode;
    public SpeechProjectsLocationsPhraseSetsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}