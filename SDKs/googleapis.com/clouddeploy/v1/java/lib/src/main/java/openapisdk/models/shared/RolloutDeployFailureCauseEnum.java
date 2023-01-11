package openapisdk.models.shared;


public enum RolloutDeployFailureCauseEnum {
    FAILURE_CAUSE_UNSPECIFIED("FAILURE_CAUSE_UNSPECIFIED"),
    CLOUD_BUILD_UNAVAILABLE("CLOUD_BUILD_UNAVAILABLE"),
    EXECUTION_FAILED("EXECUTION_FAILED"),
    DEADLINE_EXCEEDED("DEADLINE_EXCEEDED"),
    RELEASE_FAILED("RELEASE_FAILED"),
    RELEASE_ABANDONED("RELEASE_ABANDONED"),
    VERIFICATION_CONFIG_NOT_FOUND("VERIFICATION_CONFIG_NOT_FOUND");

    public final String value;

    private RolloutDeployFailureCauseEnum(String value) {
        this.value = value;
    }
}
