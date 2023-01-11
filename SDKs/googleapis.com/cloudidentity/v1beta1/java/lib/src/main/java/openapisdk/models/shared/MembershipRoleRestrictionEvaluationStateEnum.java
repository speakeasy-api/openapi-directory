package openapisdk.models.shared;


public enum MembershipRoleRestrictionEvaluationStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    COMPLIANT("COMPLIANT"),
    FORWARD_COMPLIANT("FORWARD_COMPLIANT"),
    NON_COMPLIANT("NON_COMPLIANT"),
    EVALUATING("EVALUATING");

    public final String value;

    private MembershipRoleRestrictionEvaluationStateEnum(String value) {
        this.value = value;
    }
}
