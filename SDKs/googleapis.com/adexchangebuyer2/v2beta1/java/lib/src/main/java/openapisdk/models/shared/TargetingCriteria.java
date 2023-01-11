package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TargetingCriteria
 * Advertisers can target different attributes of an ad slot. For example, they can choose to show ads only if the user is in the U.S. Such targeting criteria can be specified as part of Shared Targeting.
**/
public class TargetingCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exclusions")
    public TargetingValue[] exclusions;
    public TargetingCriteria withExclusions(TargetingValue[] exclusions) {
        this.exclusions = exclusions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inclusions")
    public TargetingValue[] inclusions;
    public TargetingCriteria withInclusions(TargetingValue[] inclusions) {
        this.inclusions = inclusions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public TargetingCriteria withKey(String key) {
        this.key = key;
        return this;
    }
}