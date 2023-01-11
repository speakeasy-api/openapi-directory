package openapisdk.models.shared;


public enum WritableVlanStatusEnum {
    ACTIVE("active"),
    RESERVED("reserved"),
    DEPRECATED("deprecated");

    public final String value;

    private WritableVlanStatusEnum(String value) {
        this.value = value;
    }
}
