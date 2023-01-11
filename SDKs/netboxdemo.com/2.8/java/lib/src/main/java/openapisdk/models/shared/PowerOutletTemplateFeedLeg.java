package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PowerOutletTemplateFeedLeg {
    @JsonProperty("label")
    public PowerOutletTemplateFeedLegLabelEnum label;
    public PowerOutletTemplateFeedLeg withLabel(PowerOutletTemplateFeedLegLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public PowerOutletTemplateFeedLegValueEnum value;
    public PowerOutletTemplateFeedLeg withValue(PowerOutletTemplateFeedLegValueEnum value) {
        this.value = value;
        return this;
    }
}