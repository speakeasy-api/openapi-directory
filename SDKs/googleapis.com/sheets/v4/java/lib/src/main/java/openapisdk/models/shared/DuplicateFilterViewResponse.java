package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DuplicateFilterViewResponse
 * The result of a filter view being duplicated.
**/
public class DuplicateFilterViewResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public FilterView filter;
    public DuplicateFilterViewResponse withFilter(FilterView filter) {
        this.filter = filter;
        return this;
    }
}