package openapisdk.models.shared;


public enum VerifyJobRunFailureCauseEnum {
    FAILURE_CAUSE_UNSPECIFIED("FAILURE_CAUSE_UNSPECIFIED"),
    CLOUD_BUILD_UNAVAILABLE("CLOUD_BUILD_UNAVAILABLE"),
    EXECUTION_FAILED("EXECUTION_FAILED"),
    DEADLINE_EXCEEDED("DEADLINE_EXCEEDED"),
    VERIFICATION_CONFIG_NOT_FOUND("VERIFICATION_CONFIG_NOT_FOUND");

    public final String value;

    private VerifyJobRunFailureCauseEnum(String value) {
        this.value = value;
    }
}
