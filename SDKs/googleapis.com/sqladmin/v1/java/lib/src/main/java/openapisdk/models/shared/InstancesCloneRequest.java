package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstancesCloneRequest
 * Database instance clone request.
**/
public class InstancesCloneRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloneContext")
    public CloneContext cloneContext;
    public InstancesCloneRequest withCloneContext(CloneContext cloneContext) {
        this.cloneContext = cloneContext;
        return this;
    }
}