package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Integer
 * Wrapper for Integer Field value.
**/
public class Integer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public Integer withValue(String value) {
        this.value = value;
        return this;
    }
}