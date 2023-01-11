package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InstantContentsTranslationResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public java.util.Map<String, String> results;
    public InstantContentsTranslationResult withResults(java.util.Map<String, String> results) {
        this.results = results;
        return this;
    }
}