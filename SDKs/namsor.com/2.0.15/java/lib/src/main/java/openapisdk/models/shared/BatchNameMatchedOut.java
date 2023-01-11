package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchNameMatchedOut {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchedNames")
    public NameMatchedOut[] matchedNames;
    public BatchNameMatchedOut withMatchedNames(NameMatchedOut[] matchedNames) {
        this.matchedNames = matchedNames;
        return this;
    }
}