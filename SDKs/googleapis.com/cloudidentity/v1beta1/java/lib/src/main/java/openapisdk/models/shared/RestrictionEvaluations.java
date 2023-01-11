package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RestrictionEvaluations
 * Evaluations of restrictions applied to parent group on this membership.
**/
public class RestrictionEvaluations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memberRestrictionEvaluation")
    public MembershipRoleRestrictionEvaluation memberRestrictionEvaluation;
    public RestrictionEvaluations withMemberRestrictionEvaluation(MembershipRoleRestrictionEvaluation memberRestrictionEvaluation) {
        this.memberRestrictionEvaluation = memberRestrictionEvaluation;
        return this;
    }
}