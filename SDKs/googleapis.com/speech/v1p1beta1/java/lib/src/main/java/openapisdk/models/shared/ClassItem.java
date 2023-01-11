package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClassItem
 * An item of the class.
**/
public class ClassItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public ClassItem withValue(String value) {
        this.value = value;
        return this;
    }
}