package openapisdk.models.shared;


public enum ChartSpecHiddenDimensionStrategyEnum {
    CHART_HIDDEN_DIMENSION_STRATEGY_UNSPECIFIED("CHART_HIDDEN_DIMENSION_STRATEGY_UNSPECIFIED"),
    SKIP_HIDDEN_ROWS_AND_COLUMNS("SKIP_HIDDEN_ROWS_AND_COLUMNS"),
    SKIP_HIDDEN_ROWS("SKIP_HIDDEN_ROWS"),
    SKIP_HIDDEN_COLUMNS("SKIP_HIDDEN_COLUMNS"),
    SHOW_ALL("SHOW_ALL");

    public final String value;

    private ChartSpecHiddenDimensionStrategyEnum(String value) {
        this.value = value;
    }
}
