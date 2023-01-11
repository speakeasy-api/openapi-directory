package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SubmitJobMediaUrlOptionsCustomVocabularies
 * Contains a collection of phrases. Custom vocabulary informs and biases the speech recognition to find those phrases (at the cost of slightly slower transcription).
**/
public class SubmitJobMediaUrlOptionsCustomVocabularies {
    @JsonProperty("phrases")
    public String[] phrases;
    public SubmitJobMediaUrlOptionsCustomVocabularies withPhrases(String[] phrases) {
        this.phrases = phrases;
        return this;
    }
}