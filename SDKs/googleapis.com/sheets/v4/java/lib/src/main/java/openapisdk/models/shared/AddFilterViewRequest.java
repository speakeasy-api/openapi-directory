package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddFilterViewRequest
 * Adds a filter view.
**/
public class AddFilterViewRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public FilterView filter;
    public AddFilterViewRequest withFilter(FilterView filter) {
        this.filter = filter;
        return this;
    }
}