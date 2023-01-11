package openapisdk.models.shared;


public enum CellFormatWrapStrategyEnum {
    WRAP_STRATEGY_UNSPECIFIED("WRAP_STRATEGY_UNSPECIFIED"),
    OVERFLOW_CELL("OVERFLOW_CELL"),
    LEGACY_WRAP("LEGACY_WRAP"),
    CLIP("CLIP"),
    WRAP("WRAP");

    public final String value;

    private CellFormatWrapStrategyEnum(String value) {
        this.value = value;
    }
}
