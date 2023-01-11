package openapisdk.models.operations;



public class SpeechProjectsLocationsPhraseSetsPatchResponse {
    public String contentType;
    public SpeechProjectsLocationsPhraseSetsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PhraseSet phraseSet;
    public SpeechProjectsLocationsPhraseSetsPatchResponse withPhraseSet(openapisdk.models.shared.PhraseSet phraseSet) {
        this.phraseSet = phraseSet;
        return this;
    }
    public Long statusCode;
    public SpeechProjectsLocationsPhraseSetsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}