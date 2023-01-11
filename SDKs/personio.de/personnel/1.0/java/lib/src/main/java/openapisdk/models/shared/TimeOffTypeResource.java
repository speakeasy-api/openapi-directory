package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TimeOffTypeResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public TimeOffTypeResourceAttributes attributes;
    public TimeOffTypeResource withAttributes(TimeOffTypeResourceAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public TimeOffTypeResource withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public TimeOffTypeResourceTypeEnum type;
    public TimeOffTypeResource withType(TimeOffTypeResourceTypeEnum type) {
        this.type = type;
        return this;
    }
}