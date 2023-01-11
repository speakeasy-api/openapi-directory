package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PowerOutletType {
    @JsonProperty("label")
    public PowerOutletTypeLabelEnum label;
    public PowerOutletType withLabel(PowerOutletTypeLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public PowerOutletTypeValueEnum value;
    public PowerOutletType withValue(PowerOutletTypeValueEnum value) {
        this.value = value;
        return this;
    }
}