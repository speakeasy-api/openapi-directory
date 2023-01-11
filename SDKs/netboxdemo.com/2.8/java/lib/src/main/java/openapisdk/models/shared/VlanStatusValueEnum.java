package openapisdk.models.shared;


public enum VlanStatusValueEnum {
    ACTIVE("active"),
    RESERVED("reserved"),
    DEPRECATED("deprecated");

    public final String value;

    private VlanStatusValueEnum(String value) {
        this.value = value;
    }
}
