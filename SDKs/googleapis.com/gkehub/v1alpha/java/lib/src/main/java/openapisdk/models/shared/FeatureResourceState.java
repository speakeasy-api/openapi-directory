package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FeatureResourceState
 * FeatureResourceState describes the state of a Feature *resource* in the GkeHub API. See `FeatureState` for the "running state" of the Feature in the Hub and across Memberships.
**/
public class FeatureResourceState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public FeatureResourceStateStateEnum state;
    public FeatureResourceState withState(FeatureResourceStateStateEnum state) {
        this.state = state;
        return this;
    }
}