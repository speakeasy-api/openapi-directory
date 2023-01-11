package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AbsencePeriodsResponseDataAttributesTimeOffType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public AbsencePeriodsResponseDataAttributesTimeOffTypeAttributes[] attributes;
    public AbsencePeriodsResponseDataAttributesTimeOffType withAttributes(AbsencePeriodsResponseDataAttributesTimeOffTypeAttributes[] attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AbsencePeriodsResponseDataAttributesTimeOffType withType(String type) {
        this.type = type;
        return this;
    }
}