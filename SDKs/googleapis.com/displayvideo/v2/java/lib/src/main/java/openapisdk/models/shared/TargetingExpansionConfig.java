package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TargetingExpansionConfig
 * Settings that control the targeting expansion of the line item. Targeting expansion allows the line item to reach a larger audience based on the original audience list and the targeting expansion level. Beginning November 7, 2022, these settings may represent the [optimized targeting feature](//support.google.com/displayvideo/answer/12060859) in place of targeting expansion. This feature will be rolled out to all partners by November 9, 2022.
**/
public class TargetingExpansionConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludeFirstPartyAudience")
    public Boolean excludeFirstPartyAudience;
    public TargetingExpansionConfig withExcludeFirstPartyAudience(Boolean excludeFirstPartyAudience) {
        this.excludeFirstPartyAudience = excludeFirstPartyAudience;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingExpansionLevel")
    public TargetingExpansionConfigTargetingExpansionLevelEnum targetingExpansionLevel;
    public TargetingExpansionConfig withTargetingExpansionLevel(TargetingExpansionConfigTargetingExpansionLevelEnum targetingExpansionLevel) {
        this.targetingExpansionLevel = targetingExpansionLevel;
        return this;
    }
}