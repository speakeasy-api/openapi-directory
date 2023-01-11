package openapisdk.models.shared;


public enum NodeFullPolicyModeEnum {
    ENFORCE("enforce"),
    AUDIT("audit"),
    DEFAULT_("default");

    public final String value;

    private NodeFullPolicyModeEnum(String value) {
        this.value = value;
    }
}
