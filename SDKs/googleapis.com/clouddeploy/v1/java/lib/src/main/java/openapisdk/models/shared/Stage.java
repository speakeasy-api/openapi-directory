package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Stage
 * Stage specifies a location to which to deploy.
**/
public class Stage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profiles")
    public String[] profiles;
    public Stage withProfiles(String[] profiles) {
        this.profiles = profiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("strategy")
    public Strategy strategy;
    public Stage withStrategy(Strategy strategy) {
        this.strategy = strategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetId")
    public String targetId;
    public Stage withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
}