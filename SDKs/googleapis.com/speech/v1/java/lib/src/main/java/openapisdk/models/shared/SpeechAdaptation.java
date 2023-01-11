package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SpeechAdaptation
 * Speech adaptation configuration.
**/
public class SpeechAdaptation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customClasses")
    public CustomClass[] customClasses;
    public SpeechAdaptation withCustomClasses(CustomClass[] customClasses) {
        this.customClasses = customClasses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phraseSetReferences")
    public String[] phraseSetReferences;
    public SpeechAdaptation withPhraseSetReferences(String[] phraseSetReferences) {
        this.phraseSetReferences = phraseSetReferences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phraseSets")
    public PhraseSet[] phraseSets;
    public SpeechAdaptation withPhraseSets(PhraseSet[] phraseSets) {
        this.phraseSets = phraseSets;
        return this;
    }
}