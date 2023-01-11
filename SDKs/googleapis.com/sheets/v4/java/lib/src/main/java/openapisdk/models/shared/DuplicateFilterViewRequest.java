package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DuplicateFilterViewRequest
 * Duplicates a particular filter view.
**/
public class DuplicateFilterViewRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterId")
    public Integer filterId;
    public DuplicateFilterViewRequest withFilterId(Integer filterId) {
        this.filterId = filterId;
        return this;
    }
}