package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Chronology {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zone")
    public DateTimeZone zone;
    public Chronology withZone(DateTimeZone zone) {
        this.zone = zone;
        return this;
    }
}