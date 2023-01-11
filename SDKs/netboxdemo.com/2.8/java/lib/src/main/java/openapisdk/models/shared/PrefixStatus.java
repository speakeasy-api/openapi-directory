package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PrefixStatus {
    @JsonProperty("label")
    public PrefixStatusLabelEnum label;
    public PrefixStatus withLabel(PrefixStatusLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public PrefixStatusValueEnum value;
    public PrefixStatus withValue(PrefixStatusValueEnum value) {
        this.value = value;
        return this;
    }
}