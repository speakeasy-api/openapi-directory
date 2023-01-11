package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PrefixFamily {
    @JsonProperty("label")
    public PrefixFamilyLabelEnum label;
    public PrefixFamily withLabel(PrefixFamilyLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public Long value;
    public PrefixFamily withValue(Long value) {
        this.value = value;
        return this;
    }
}