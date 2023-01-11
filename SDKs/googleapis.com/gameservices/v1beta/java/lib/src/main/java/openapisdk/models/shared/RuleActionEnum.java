package openapisdk.models.shared;


public enum RuleActionEnum {
    NO_ACTION("NO_ACTION"),
    ALLOW("ALLOW"),
    ALLOW_WITH_LOG("ALLOW_WITH_LOG"),
    DENY("DENY"),
    DENY_WITH_LOG("DENY_WITH_LOG"),
    LOG("LOG");

    public final String value;

    private RuleActionEnum(String value) {
        this.value = value;
    }
}
