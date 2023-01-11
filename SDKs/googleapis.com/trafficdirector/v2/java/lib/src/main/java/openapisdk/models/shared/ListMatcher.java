package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListMatcher
 * Specifies the way to match a list value.
**/
public class ListMatcher {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oneOf")
    public ValueMatcher oneOf;
    public ListMatcher withOneOf(ValueMatcher oneOf) {
        this.oneOf = oneOf;
        return this;
    }
}