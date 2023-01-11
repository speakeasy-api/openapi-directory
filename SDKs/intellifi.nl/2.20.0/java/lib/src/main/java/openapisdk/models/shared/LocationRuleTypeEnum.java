package openapisdk.models.shared;


public enum LocationRuleTypeEnum {
    ALLOW("allow"),
    DISALLOW("disallow"),
    DISAPPEARED("disappeared"),
    DEBOUNCE("debounce");

    public final String value;

    private LocationRuleTypeEnum(String value) {
        this.value = value;
    }
}
