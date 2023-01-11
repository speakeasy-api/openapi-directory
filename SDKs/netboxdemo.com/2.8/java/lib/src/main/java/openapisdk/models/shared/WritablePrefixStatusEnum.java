package openapisdk.models.shared;


public enum WritablePrefixStatusEnum {
    CONTAINER("container"),
    ACTIVE("active"),
    RESERVED("reserved"),
    DEPRECATED("deprecated");

    public final String value;

    private WritablePrefixStatusEnum(String value) {
        this.value = value;
    }
}
