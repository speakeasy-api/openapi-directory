package openapisdk.models.shared;


public enum PatchJobStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    STARTED("STARTED"),
    INSTANCE_LOOKUP("INSTANCE_LOOKUP"),
    PATCHING("PATCHING"),
    SUCCEEDED("SUCCEEDED"),
    COMPLETED_WITH_ERRORS("COMPLETED_WITH_ERRORS"),
    CANCELED("CANCELED"),
    TIMED_OUT("TIMED_OUT");

    public final String value;

    private PatchJobStateEnum(String value) {
        this.value = value;
    }
}
