package openapisdk.models.shared;


public enum EventTriggerRetryPolicyEnum {
    RETRY_POLICY_UNSPECIFIED("RETRY_POLICY_UNSPECIFIED"),
    RETRY_POLICY_DO_NOT_RETRY("RETRY_POLICY_DO_NOT_RETRY"),
    RETRY_POLICY_RETRY("RETRY_POLICY_RETRY");

    public final String value;

    private EventTriggerRetryPolicyEnum(String value) {
        this.value = value;
    }
}
