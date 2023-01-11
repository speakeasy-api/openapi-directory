package openapisdk.models.shared;


public enum PrefixStatusLabelEnum {
    CONTAINER("Container"),
    ACTIVE("Active"),
    RESERVED("Reserved"),
    DEPRECATED("Deprecated");

    public final String value;

    private PrefixStatusLabelEnum(String value) {
        this.value = value;
    }
}
