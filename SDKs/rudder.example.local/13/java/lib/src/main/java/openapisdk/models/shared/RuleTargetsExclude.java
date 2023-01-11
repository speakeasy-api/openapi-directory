package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RuleTargetsExclude
 * list of groups to exclude from rule application
**/
public class RuleTargetsExclude {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("or")
    public RuleTargetEnum[] or;
    public RuleTargetsExclude withOr(RuleTargetEnum[] or) {
        this.or = or;
        return this;
    }
}