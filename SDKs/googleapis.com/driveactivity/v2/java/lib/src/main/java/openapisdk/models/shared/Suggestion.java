package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Suggestion
 * A suggestion.
**/
public class Suggestion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subtype")
    public SuggestionSubtypeEnum subtype;
    public Suggestion withSubtype(SuggestionSubtypeEnum subtype) {
        this.subtype = subtype;
        return this;
    }
}