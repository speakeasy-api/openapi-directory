package openapisdk.models.shared;


public enum AuthorizationPolicyActionEnum {
    ACTION_UNSPECIFIED("ACTION_UNSPECIFIED"),
    ALLOW("ALLOW"),
    DENY("DENY");

    public final String value;

    private AuthorizationPolicyActionEnum(String value) {
        this.value = value;
    }
}
