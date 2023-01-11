package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PowerFeedPhase {
    @JsonProperty("label")
    public PowerFeedPhaseLabelEnum label;
    public PowerFeedPhase withLabel(PowerFeedPhaseLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public PowerFeedPhaseValueEnum value;
    public PowerFeedPhase withValue(PowerFeedPhaseValueEnum value) {
        this.value = value;
        return this;
    }
}