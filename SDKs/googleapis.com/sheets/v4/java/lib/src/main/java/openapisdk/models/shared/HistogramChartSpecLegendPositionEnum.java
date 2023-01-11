package openapisdk.models.shared;


public enum HistogramChartSpecLegendPositionEnum {
    HISTOGRAM_CHART_LEGEND_POSITION_UNSPECIFIED("HISTOGRAM_CHART_LEGEND_POSITION_UNSPECIFIED"),
    BOTTOM_LEGEND("BOTTOM_LEGEND"),
    LEFT_LEGEND("LEFT_LEGEND"),
    RIGHT_LEGEND("RIGHT_LEGEND"),
    TOP_LEGEND("TOP_LEGEND"),
    NO_LEGEND("NO_LEGEND"),
    INSIDE_LEGEND("INSIDE_LEGEND");

    public final String value;

    private HistogramChartSpecLegendPositionEnum(String value) {
        this.value = value;
    }
}
