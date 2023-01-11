package openapisdk.models.shared;


public enum VlanStatusLabelEnum {
    ACTIVE("Active"),
    RESERVED("Reserved"),
    DEPRECATED("Deprecated");

    public final String value;

    private VlanStatusLabelEnum(String value) {
        this.value = value;
    }
}
