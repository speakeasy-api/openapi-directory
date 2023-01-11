package openapisdk.models.shared;


public enum LifecyclePolicyActionEnum {
    ACTION_UNSPECIFIED("ACTION_UNSPECIFIED"),
    RETRY_TASK("RETRY_TASK"),
    FAIL_TASK("FAIL_TASK");

    public final String value;

    private LifecyclePolicyActionEnum(String value) {
        this.value = value;
    }
}
