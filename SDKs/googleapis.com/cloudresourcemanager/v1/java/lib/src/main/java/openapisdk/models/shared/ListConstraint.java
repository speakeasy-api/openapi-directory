package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListConstraint
 * A `Constraint` that allows or disallows a list of string values, which are configured by an Organization's policy administrator with a `Policy`.
**/
public class ListConstraint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suggestedValue")
    public String suggestedValue;
    public ListConstraint withSuggestedValue(String suggestedValue) {
        this.suggestedValue = suggestedValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportsUnder")
    public Boolean supportsUnder;
    public ListConstraint withSupportsUnder(Boolean supportsUnder) {
        this.supportsUnder = supportsUnder;
        return this;
    }
}