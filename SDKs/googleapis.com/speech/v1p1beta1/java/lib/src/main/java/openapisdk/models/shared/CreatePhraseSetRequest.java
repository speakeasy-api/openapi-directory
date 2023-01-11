package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreatePhraseSetRequest
 * Message sent by the client for the `CreatePhraseSet` method.
**/
public class CreatePhraseSetRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phraseSet")
    public PhraseSet phraseSet;
    public CreatePhraseSetRequest withPhraseSet(PhraseSet phraseSet) {
        this.phraseSet = phraseSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phraseSetId")
    public String phraseSetId;
    public CreatePhraseSetRequest withPhraseSetId(String phraseSetId) {
        this.phraseSetId = phraseSetId;
        return this;
    }
}