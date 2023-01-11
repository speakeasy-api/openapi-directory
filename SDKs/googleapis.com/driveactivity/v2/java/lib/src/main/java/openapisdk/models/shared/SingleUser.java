package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SingleUser
 * Wrapper for User Field value.
**/
public class SingleUser {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public SingleUser withValue(String value) {
        this.value = value;
        return this;
    }
}