package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RepeatedEnumAttributeValue
 * Values for an attribute with a `value_type` of REPEATED_ENUM. This consists of two lists of value IDs: those that are set (true) and those that are unset (false). Values absent are considered unknown. At least one value must be specified.
**/
public class RepeatedEnumAttributeValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("setValues")
    public String[] setValues;
    public RepeatedEnumAttributeValue withSetValues(String[] setValues) {
        this.setValues = setValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unsetValues")
    public String[] unsetValues;
    public RepeatedEnumAttributeValue withUnsetValues(String[] unsetValues) {
        this.unsetValues = unsetValues;
        return this;
    }
}