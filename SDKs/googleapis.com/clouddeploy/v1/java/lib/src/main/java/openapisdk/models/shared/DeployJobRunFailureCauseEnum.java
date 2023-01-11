package openapisdk.models.shared;


public enum DeployJobRunFailureCauseEnum {
    FAILURE_CAUSE_UNSPECIFIED("FAILURE_CAUSE_UNSPECIFIED"),
    CLOUD_BUILD_UNAVAILABLE("CLOUD_BUILD_UNAVAILABLE"),
    EXECUTION_FAILED("EXECUTION_FAILED"),
    DEADLINE_EXCEEDED("DEADLINE_EXCEEDED");

    public final String value;

    private DeployJobRunFailureCauseEnum(String value) {
        this.value = value;
    }
}
