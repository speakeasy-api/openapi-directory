package openapisdk.models.shared;


public enum FirewallRuleActionEnum {
    UNSPECIFIED_ACTION("UNSPECIFIED_ACTION"),
    ALLOW("ALLOW"),
    DENY("DENY");

    public final String value;

    private FirewallRuleActionEnum(String value) {
        this.value = value;
    }
}
