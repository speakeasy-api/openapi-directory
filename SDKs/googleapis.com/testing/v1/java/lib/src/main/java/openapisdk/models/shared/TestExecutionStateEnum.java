package openapisdk.models.shared;


public enum TestExecutionStateEnum {
    TEST_STATE_UNSPECIFIED("TEST_STATE_UNSPECIFIED"),
    VALIDATING("VALIDATING"),
    PENDING("PENDING"),
    RUNNING("RUNNING"),
    FINISHED("FINISHED"),
    ERROR("ERROR"),
    UNSUPPORTED_ENVIRONMENT("UNSUPPORTED_ENVIRONMENT"),
    INCOMPATIBLE_ENVIRONMENT("INCOMPATIBLE_ENVIRONMENT"),
    INCOMPATIBLE_ARCHITECTURE("INCOMPATIBLE_ARCHITECTURE"),
    CANCELLED("CANCELLED"),
    INVALID("INVALID");

    public final String value;

    private TestExecutionStateEnum(String value) {
        this.value = value;
    }
}
