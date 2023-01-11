package openapisdk.models.operations;



public class SpeechProjectsLocationsPhraseSetsCreateResponse {
    public String contentType;
    public SpeechProjectsLocationsPhraseSetsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PhraseSet phraseSet;
    public SpeechProjectsLocationsPhraseSetsCreateResponse withPhraseSet(openapisdk.models.shared.PhraseSet phraseSet) {
        this.phraseSet = phraseSet;
        return this;
    }
    public Long statusCode;
    public SpeechProjectsLocationsPhraseSetsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}