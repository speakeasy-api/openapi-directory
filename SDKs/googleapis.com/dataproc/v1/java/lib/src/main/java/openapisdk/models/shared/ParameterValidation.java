package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ParameterValidation
 * Configuration for parameter validation.
**/
public class ParameterValidation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regex")
    public RegexValidation regex;
    public ParameterValidation withRegex(RegexValidation regex) {
        this.regex = regex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public ValueValidation values;
    public ParameterValidation withValues(ValueValidation values) {
        this.values = values;
        return this;
    }
}