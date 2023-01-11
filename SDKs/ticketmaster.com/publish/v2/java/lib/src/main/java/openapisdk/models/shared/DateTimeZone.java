package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DateTimeZone {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixed")
    public Boolean fixed;
    public DateTimeZone withFixed(Boolean fixed) {
        this.fixed = fixed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public DateTimeZone withId(String id) {
        this.id = id;
        return this;
    }
}