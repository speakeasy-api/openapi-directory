package openapisdk.models.shared;


public enum DirectivePolicyModeEnum {
    ENFORCE("enforce"),
    AUDIT("audit");

    public final String value;

    private DirectivePolicyModeEnum(String value) {
        this.value = value;
    }
}
