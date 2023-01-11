package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SelectionList
 * Wrapper for SelectionList Field value.
**/
public class SelectionList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public Selection[] values;
    public SelectionList withValues(Selection[] values) {
        this.values = values;
        return this;
    }
}