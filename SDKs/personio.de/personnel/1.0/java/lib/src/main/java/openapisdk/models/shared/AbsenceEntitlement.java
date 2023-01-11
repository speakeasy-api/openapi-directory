package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AbsenceEntitlement {
    @JsonProperty("label")
    public String label;
    public AbsenceEntitlement withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public AbsenceEntitlementValue[] value;
    public AbsenceEntitlement withValue(AbsenceEntitlementValue[] value) {
        this.value = value;
        return this;
    }
}