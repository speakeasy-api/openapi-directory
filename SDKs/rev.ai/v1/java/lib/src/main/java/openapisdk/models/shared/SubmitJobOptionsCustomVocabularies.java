package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SubmitJobOptionsCustomVocabularies
 * Contains a collection of phrases. Custom vocabulary informs and biases the speech recognition to find those phrases (at the cost of slightly slower transcription).
**/
public class SubmitJobOptionsCustomVocabularies {
    @JsonProperty("phrases")
    public String[] phrases;
    public SubmitJobOptionsCustomVocabularies withPhrases(String[] phrases) {
        this.phrases = phrases;
        return this;
    }
}