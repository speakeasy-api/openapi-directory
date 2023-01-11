package openapisdk.models.shared;


public enum PatchDeploymentStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    ACTIVE("ACTIVE"),
    PAUSED("PAUSED");

    public final String value;

    private PatchDeploymentStateEnum(String value) {
        this.value = value;
    }
}
