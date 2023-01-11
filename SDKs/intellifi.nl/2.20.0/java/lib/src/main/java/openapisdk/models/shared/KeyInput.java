package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class KeyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_read_only")
    public Boolean isReadOnly;
    public KeyInput withIsReadOnly(Boolean isReadOnly) {
        this.isReadOnly = isReadOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public KeyInput withLabel(String label) {
        this.label = label;
        return this;
    }
}