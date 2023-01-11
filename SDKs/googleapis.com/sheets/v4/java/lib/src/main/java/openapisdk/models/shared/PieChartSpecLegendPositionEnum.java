package openapisdk.models.shared;


public enum PieChartSpecLegendPositionEnum {
    PIE_CHART_LEGEND_POSITION_UNSPECIFIED("PIE_CHART_LEGEND_POSITION_UNSPECIFIED"),
    BOTTOM_LEGEND("BOTTOM_LEGEND"),
    LEFT_LEGEND("LEFT_LEGEND"),
    RIGHT_LEGEND("RIGHT_LEGEND"),
    TOP_LEGEND("TOP_LEGEND"),
    NO_LEGEND("NO_LEGEND"),
    LABELED_LEGEND("LABELED_LEGEND");

    public final String value;

    private PieChartSpecLegendPositionEnum(String value) {
        this.value = value;
    }
}
