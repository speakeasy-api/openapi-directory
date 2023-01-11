package openapisdk.models.shared;


public enum ResponsePolicyRuleBehaviorEnum {
    BEHAVIOR_UNSPECIFIED("behaviorUnspecified"),
    BYPASS_RESPONSE_POLICY("bypassResponsePolicy");

    public final String value;

    private ResponsePolicyRuleBehaviorEnum(String value) {
        this.value = value;
    }
}
