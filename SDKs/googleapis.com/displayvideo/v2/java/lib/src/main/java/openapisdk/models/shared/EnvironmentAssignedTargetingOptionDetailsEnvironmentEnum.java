package openapisdk.models.shared;


public enum EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum {
    ENVIRONMENT_UNSPECIFIED("ENVIRONMENT_UNSPECIFIED"),
    ENVIRONMENT_WEB_OPTIMIZED("ENVIRONMENT_WEB_OPTIMIZED"),
    ENVIRONMENT_WEB_NOT_OPTIMIZED("ENVIRONMENT_WEB_NOT_OPTIMIZED"),
    ENVIRONMENT_APP("ENVIRONMENT_APP");

    public final String value;

    private EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum(String value) {
        this.value = value;
    }
}
