package openapisdk.models.shared;


public enum GoogleCloudRunV2ServiceLaunchStageEnum {
    LAUNCH_STAGE_UNSPECIFIED("LAUNCH_STAGE_UNSPECIFIED"),
    UNIMPLEMENTED("UNIMPLEMENTED"),
    PRELAUNCH("PRELAUNCH"),
    EARLY_ACCESS("EARLY_ACCESS"),
    ALPHA("ALPHA"),
    BETA("BETA"),
    GA("GA"),
    DEPRECATED("DEPRECATED");

    public final String value;

    private GoogleCloudRunV2ServiceLaunchStageEnum(String value) {
        this.value = value;
    }
}
