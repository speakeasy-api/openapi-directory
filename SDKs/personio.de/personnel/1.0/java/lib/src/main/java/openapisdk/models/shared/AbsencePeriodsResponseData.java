package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AbsencePeriodsResponseData {
    @JsonProperty("attributes")
    public AbsencePeriodsResponseDataAttributes[] attributes;
    public AbsencePeriodsResponseData withAttributes(AbsencePeriodsResponseDataAttributes[] attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public AbsencePeriodsResponseData withType(String type) {
        this.type = type;
        return this;
    }
}