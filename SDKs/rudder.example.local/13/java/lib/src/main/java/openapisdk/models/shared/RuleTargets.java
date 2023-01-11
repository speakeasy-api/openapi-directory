package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RuleTargets {
    @JsonProperty("exclude")
    public RuleTargetsExclude exclude;
    public RuleTargets withExclude(RuleTargetsExclude exclude) {
        this.exclude = exclude;
        return this;
    }
    @JsonProperty("include")
    public RuleTargetsInclude include;
    public RuleTargets withInclude(RuleTargetsInclude include) {
        this.include = include;
        return this;
    }
}