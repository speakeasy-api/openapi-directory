package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PowerFeedType {
    @JsonProperty("label")
    public PowerFeedTypeLabelEnum label;
    public PowerFeedType withLabel(PowerFeedTypeLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public PowerFeedTypeValueEnum value;
    public PowerFeedType withValue(PowerFeedTypeValueEnum value) {
        this.value = value;
        return this;
    }
}