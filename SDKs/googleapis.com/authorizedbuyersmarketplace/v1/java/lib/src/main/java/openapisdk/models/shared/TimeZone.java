package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TimeZone
 * Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).
**/
public class TimeZone {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public TimeZone withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public TimeZone withVersion(String version) {
        this.version = version;
        return this;
    }
}