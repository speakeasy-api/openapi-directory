package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AttendancePeriodsResponseData {
    @JsonProperty("attributes")
    public AttendancePeriodsResponseDataAttributes[] attributes;
    public AttendancePeriodsResponseData withAttributes(AttendancePeriodsResponseDataAttributes[] attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public AttendancePeriodsResponseData withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public AttendancePeriodsResponseData withType(String type) {
        this.type = type;
        return this;
    }
}