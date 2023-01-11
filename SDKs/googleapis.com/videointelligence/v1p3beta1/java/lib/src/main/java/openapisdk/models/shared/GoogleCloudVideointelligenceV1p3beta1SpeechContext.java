package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVideointelligenceV1p3beta1SpeechContext
 * Provides "hints" to the speech recognizer to favor specific words and phrases in the results.
**/
public class GoogleCloudVideointelligenceV1p3beta1SpeechContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phrases")
    public String[] phrases;
    public GoogleCloudVideointelligenceV1p3beta1SpeechContext withPhrases(String[] phrases) {
        this.phrases = phrases;
        return this;
    }
}