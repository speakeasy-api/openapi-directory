package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Date
 * Wrapper for Date Field value.
**/
public class Date {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public Date withValue(String value) {
        this.value = value;
        return this;
    }
}