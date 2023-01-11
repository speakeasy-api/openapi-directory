package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AutocompleteResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("docs")
    public AutocompleteResult[] docs;
    public AutocompleteResults withDocs(AutocompleteResult[] docs) {
        this.docs = docs;
        return this;
    }
}