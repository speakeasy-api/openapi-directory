package openapisdk.models.shared;


public enum OsPolicyAssignmentRolloutStateEnum {
    ROLLOUT_STATE_UNSPECIFIED("ROLLOUT_STATE_UNSPECIFIED"),
    IN_PROGRESS("IN_PROGRESS"),
    CANCELLING("CANCELLING"),
    CANCELLED("CANCELLED"),
    SUCCEEDED("SUCCEEDED");

    public final String value;

    private OsPolicyAssignmentRolloutStateEnum(String value) {
        this.value = value;
    }
}
