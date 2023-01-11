package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MembershipRoleRestrictionEvaluation
 * The evaluated state of this restriction.
**/
public class MembershipRoleRestrictionEvaluation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public MembershipRoleRestrictionEvaluationStateEnum state;
    public MembershipRoleRestrictionEvaluation withState(MembershipRoleRestrictionEvaluationStateEnum state) {
        this.state = state;
        return this;
    }
}