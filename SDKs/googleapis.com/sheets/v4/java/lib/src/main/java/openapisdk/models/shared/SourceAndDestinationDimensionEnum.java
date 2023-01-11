package openapisdk.models.shared;


public enum SourceAndDestinationDimensionEnum {
    DIMENSION_UNSPECIFIED("DIMENSION_UNSPECIFIED"),
    ROWS("ROWS"),
    COLUMNS("COLUMNS");

    public final String value;

    private SourceAndDestinationDimensionEnum(String value) {
        this.value = value;
    }
}
