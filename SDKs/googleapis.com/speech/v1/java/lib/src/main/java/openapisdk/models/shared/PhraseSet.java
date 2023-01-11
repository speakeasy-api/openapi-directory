package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PhraseSet
 * Provides "hints" to the speech recognizer to favor specific words and phrases in the results.
**/
public class PhraseSet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boost")
    public Float boost;
    public PhraseSet withBoost(Float boost) {
        this.boost = boost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PhraseSet withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phrases")
    public Phrase[] phrases;
    public PhraseSet withPhrases(Phrase[] phrases) {
        this.phrases = phrases;
        return this;
    }
}