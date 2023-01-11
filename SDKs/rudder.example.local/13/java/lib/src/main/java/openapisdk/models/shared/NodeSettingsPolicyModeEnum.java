package openapisdk.models.shared;


public enum NodeSettingsPolicyModeEnum {
    AUDIT("audit"),
    ENFORCE("enforce"),
    DEFAULT_("default");

    public final String value;

    private NodeSettingsPolicyModeEnum(String value) {
        this.value = value;
    }
}
