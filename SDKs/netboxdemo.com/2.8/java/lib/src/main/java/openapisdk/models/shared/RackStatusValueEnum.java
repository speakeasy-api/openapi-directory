package openapisdk.models.shared;


public enum RackStatusValueEnum {
    RESERVED("reserved"),
    AVAILABLE("available"),
    PLANNED("planned"),
    ACTIVE("active"),
    DEPRECATED("deprecated");

    public final String value;

    private RackStatusValueEnum(String value) {
        this.value = value;
    }
}
