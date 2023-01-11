package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PowerOutletFeedLeg {
    @JsonProperty("label")
    public PowerOutletFeedLegLabelEnum label;
    public PowerOutletFeedLeg withLabel(PowerOutletFeedLegLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public PowerOutletFeedLegValueEnum value;
    public PowerOutletFeedLeg withValue(PowerOutletFeedLegValueEnum value) {
        this.value = value;
        return this;
    }
}