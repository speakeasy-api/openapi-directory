package openapisdk.models.operations;



public class SpeechProjectsLocationsPhraseSetsGetResponse {
    public String contentType;
    public SpeechProjectsLocationsPhraseSetsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PhraseSet phraseSet;
    public SpeechProjectsLocationsPhraseSetsGetResponse withPhraseSet(openapisdk.models.shared.PhraseSet phraseSet) {
        this.phraseSet = phraseSet;
        return this;
    }
    public Long statusCode;
    public SpeechProjectsLocationsPhraseSetsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}