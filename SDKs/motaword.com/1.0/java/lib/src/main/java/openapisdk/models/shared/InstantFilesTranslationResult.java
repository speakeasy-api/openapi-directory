package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InstantFilesTranslationResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public java.util.Map<String, String> results;
    public InstantFilesTranslationResult withResults(java.util.Map<String, String> results) {
        this.results = results;
        return this;
    }
}