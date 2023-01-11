package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LayAutocomplete {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("highlight")
    public String highlight;
    public LayAutocomplete withHighlight(String highlight) {
        this.highlight = highlight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public LayAutocomplete withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public LayAutocomplete withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matched_synonym")
    public String matchedSynonym;
    public LayAutocomplete withMatchedSynonym(String matchedSynonym) {
        this.matchedSynonym = matchedSynonym;
        return this;
    }
}