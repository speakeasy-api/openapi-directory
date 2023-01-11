package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FeatureState
 * FeatureState describes the high-level state of a Feature. It may be used to describe a Feature's state at the environ-level, or per-membershop, depending on the context.
**/
public class FeatureState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public FeatureStateCodeEnum code;
    public FeatureState withCode(FeatureStateCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public FeatureState withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public FeatureState withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}