package openapisdk.models.shared;


public enum AssignmentStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    PENDING("PENDING"),
    ACTIVE("ACTIVE");

    public final String value;

    private AssignmentStateEnum(String value) {
        this.value = value;
    }
}
