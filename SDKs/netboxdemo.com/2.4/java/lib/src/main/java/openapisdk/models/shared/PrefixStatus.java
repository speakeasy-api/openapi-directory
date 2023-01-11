package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PrefixStatus {
    @JsonProperty("label")
    public String label;
    public PrefixStatus withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public Long value;
    public PrefixStatus withValue(Long value) {
        this.value = value;
        return this;
    }
}