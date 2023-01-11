package openapisdk.models.shared;


public enum TargetRenderFailureCauseEnum {
    FAILURE_CAUSE_UNSPECIFIED("FAILURE_CAUSE_UNSPECIFIED"),
    CLOUD_BUILD_UNAVAILABLE("CLOUD_BUILD_UNAVAILABLE"),
    EXECUTION_FAILED("EXECUTION_FAILED");

    public final String value;

    private TargetRenderFailureCauseEnum(String value) {
        this.value = value;
    }
}
