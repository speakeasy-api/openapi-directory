package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AbsenceEntitlementValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public AbsenceEntitlementValueAttributes attributes;
    public AbsenceEntitlementValue withAttributes(AbsenceEntitlementValueAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public AbsenceEntitlementValueTypeEnum type;
    public AbsenceEntitlementValue withType(AbsenceEntitlementValueTypeEnum type) {
        this.type = type;
        return this;
    }
}