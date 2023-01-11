package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RuleTargetsInclude
 * list of groups to include in rule application
**/
public class RuleTargetsInclude {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("or")
    public RuleTargetEnum[] or;
    public RuleTargetsInclude withOr(RuleTargetEnum[] or) {
        this.or = or;
        return this;
    }
}