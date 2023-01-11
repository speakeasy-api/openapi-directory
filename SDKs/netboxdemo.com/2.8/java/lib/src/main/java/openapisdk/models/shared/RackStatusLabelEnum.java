package openapisdk.models.shared;


public enum RackStatusLabelEnum {
    RESERVED("Reserved"),
    AVAILABLE("Available"),
    PLANNED("Planned"),
    ACTIVE("Active"),
    DEPRECATED("Deprecated");

    public final String value;

    private RackStatusLabelEnum(String value) {
        this.value = value;
    }
}
