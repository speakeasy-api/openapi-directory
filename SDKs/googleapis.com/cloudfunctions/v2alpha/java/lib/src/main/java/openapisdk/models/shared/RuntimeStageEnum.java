package openapisdk.models.shared;


public enum RuntimeStageEnum {
    RUNTIME_STAGE_UNSPECIFIED("RUNTIME_STAGE_UNSPECIFIED"),
    DEVELOPMENT("DEVELOPMENT"),
    ALPHA("ALPHA"),
    BETA("BETA"),
    GA("GA"),
    DEPRECATED("DEPRECATED"),
    DECOMMISSIONED("DECOMMISSIONED");

    public final String value;

    private RuntimeStageEnum(String value) {
        this.value = value;
    }
}
