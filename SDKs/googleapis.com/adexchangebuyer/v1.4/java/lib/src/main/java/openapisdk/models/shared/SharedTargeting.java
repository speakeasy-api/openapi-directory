package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SharedTargeting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exclusions")
    public TargetingValue[] exclusions;
    public SharedTargeting withExclusions(TargetingValue[] exclusions) {
        this.exclusions = exclusions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inclusions")
    public TargetingValue[] inclusions;
    public SharedTargeting withInclusions(TargetingValue[] inclusions) {
        this.inclusions = inclusions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public SharedTargeting withKey(String key) {
        this.key = key;
        return this;
    }
}