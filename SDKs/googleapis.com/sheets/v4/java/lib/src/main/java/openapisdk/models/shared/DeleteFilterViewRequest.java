package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteFilterViewRequest
 * Deletes a particular filter view.
**/
public class DeleteFilterViewRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterId")
    public Integer filterId;
    public DeleteFilterViewRequest withFilterId(Integer filterId) {
        this.filterId = filterId;
        return this;
    }
}