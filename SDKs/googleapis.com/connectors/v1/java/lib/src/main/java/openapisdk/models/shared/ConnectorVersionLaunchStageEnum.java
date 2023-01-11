package openapisdk.models.shared;


public enum ConnectorVersionLaunchStageEnum {
    LAUNCH_STAGE_UNSPECIFIED("LAUNCH_STAGE_UNSPECIFIED"),
    PREVIEW("PREVIEW"),
    GA("GA"),
    DEPRECATED("DEPRECATED");

    public final String value;

    private ConnectorVersionLaunchStageEnum(String value) {
        this.value = value;
    }
}
