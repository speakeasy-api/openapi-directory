package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScopeFeatureState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public FeatureState state;
    public ScopeFeatureState withState(FeatureState state) {
        this.state = state;
        return this;
    }
}