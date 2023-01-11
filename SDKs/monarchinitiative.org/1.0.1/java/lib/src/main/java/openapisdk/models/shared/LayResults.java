package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LayResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public LayAutocomplete[] results;
    public LayResults withResults(LayAutocomplete[] results) {
        this.results = results;
        return this;
    }
}