package openapisdk.models.shared;


public enum WritableRackStatusEnum {
    RESERVED("reserved"),
    AVAILABLE("available"),
    PLANNED("planned"),
    ACTIVE("active"),
    DEPRECATED("deprecated");

    public final String value;

    private WritableRackStatusEnum(String value) {
        this.value = value;
    }
}
