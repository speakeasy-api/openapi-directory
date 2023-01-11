package openapisdk.models.shared;


public enum RolloutApprovalStateEnum {
    APPROVAL_STATE_UNSPECIFIED("APPROVAL_STATE_UNSPECIFIED"),
    NEEDS_APPROVAL("NEEDS_APPROVAL"),
    DOES_NOT_NEED_APPROVAL("DOES_NOT_NEED_APPROVAL"),
    APPROVED("APPROVED"),
    REJECTED("REJECTED");

    public final String value;

    private RolloutApprovalStateEnum(String value) {
        this.value = value;
    }
}
