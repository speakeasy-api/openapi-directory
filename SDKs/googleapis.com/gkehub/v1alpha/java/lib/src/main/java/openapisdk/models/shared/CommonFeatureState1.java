package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CommonFeatureState1
 * CommonFeatureState contains Hub-wide Feature status information.
**/
public class CommonFeatureState1 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appdevexperience")
    public AppDevExperienceFeatureState appdevexperience;
    public CommonFeatureState1 withAppdevexperience(AppDevExperienceFeatureState appdevexperience) {
        this.appdevexperience = appdevexperience;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fleetobservability")
    public java.util.Map<String, Object> fleetobservability;
    public CommonFeatureState1 withFleetobservability(java.util.Map<String, Object> fleetobservability) {
        this.fleetobservability = fleetobservability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public FeatureState state;
    public CommonFeatureState1 withState(FeatureState state) {
        this.state = state;
        return this;
    }
}