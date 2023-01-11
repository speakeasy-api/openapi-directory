package openapisdk.models.shared;


public enum PrefixStatusValueEnum {
    CONTAINER("container"),
    ACTIVE("active"),
    RESERVED("reserved"),
    DEPRECATED("deprecated");

    public final String value;

    private PrefixStatusValueEnum(String value) {
        this.value = value;
    }
}
