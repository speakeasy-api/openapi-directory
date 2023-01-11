package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FleetLifecycleState
 * FleetLifecycleState describes the state of a Fleet resource.
**/
public class FleetLifecycleState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public FleetLifecycleStateCodeEnum code;
    public FleetLifecycleState withCode(FleetLifecycleStateCodeEnum code) {
        this.code = code;
        return this;
    }
}