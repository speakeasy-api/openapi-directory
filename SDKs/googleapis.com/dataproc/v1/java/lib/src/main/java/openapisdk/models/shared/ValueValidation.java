package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ValueValidation
 * Validation based on a list of allowed values.
**/
public class ValueValidation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public String[] values;
    public ValueValidation withValues(String[] values) {
        this.values = values;
        return this;
    }
}