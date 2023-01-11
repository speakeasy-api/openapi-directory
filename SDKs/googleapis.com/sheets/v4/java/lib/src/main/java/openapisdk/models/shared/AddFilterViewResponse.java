package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddFilterViewResponse
 * The result of adding a filter view.
**/
public class AddFilterViewResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public FilterView filter;
    public AddFilterViewResponse withFilter(FilterView filter) {
        this.filter = filter;
        return this;
    }
}