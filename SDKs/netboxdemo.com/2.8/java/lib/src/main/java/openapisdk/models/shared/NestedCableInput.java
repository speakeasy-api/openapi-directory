package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NestedCableInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public NestedCableInput withLabel(String label) {
        this.label = label;
        return this;
    }
}