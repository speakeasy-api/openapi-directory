package openapisdk.models.shared;


public enum CapacityCommitmentStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    PENDING("PENDING"),
    ACTIVE("ACTIVE"),
    FAILED("FAILED");

    public final String value;

    private CapacityCommitmentStateEnum(String value) {
        this.value = value;
    }
}
