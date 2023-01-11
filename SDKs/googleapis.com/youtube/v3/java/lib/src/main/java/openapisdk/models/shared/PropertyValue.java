package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PropertyValue
 * A pair Property / Value.
**/
public class PropertyValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("property")
    public String property;
    public PropertyValue withProperty(String property) {
        this.property = property;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public PropertyValue withValue(String value) {
        this.value = value;
        return this;
    }
}