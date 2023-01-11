package openapisdk.models.shared;


public enum ExecutionConfigUsagesEnum {
    EXECUTION_ENVIRONMENT_USAGE_UNSPECIFIED("EXECUTION_ENVIRONMENT_USAGE_UNSPECIFIED"),
    RENDER("RENDER"),
    DEPLOY("DEPLOY"),
    VERIFY("VERIFY");

    public final String value;

    private ExecutionConfigUsagesEnum(String value) {
        this.value = value;
    }
}
