package openapisdk.models.shared;


public enum ProviderLaunchStageEnum {
    LAUNCH_STAGE_UNSPECIFIED("LAUNCH_STAGE_UNSPECIFIED"),
    PREVIEW("PREVIEW"),
    GA("GA"),
    DEPRECATED("DEPRECATED");

    public final String value;

    private ProviderLaunchStageEnum(String value) {
        this.value = value;
    }
}
