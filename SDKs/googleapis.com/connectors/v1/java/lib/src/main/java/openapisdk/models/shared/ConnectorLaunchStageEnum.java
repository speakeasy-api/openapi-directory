package openapisdk.models.shared;


public enum ConnectorLaunchStageEnum {
    LAUNCH_STAGE_UNSPECIFIED("LAUNCH_STAGE_UNSPECIFIED"),
    PREVIEW("PREVIEW"),
    GA("GA"),
    DEPRECATED("DEPRECATED");

    public final String value;

    private ConnectorLaunchStageEnum(String value) {
        this.value = value;
    }
}
