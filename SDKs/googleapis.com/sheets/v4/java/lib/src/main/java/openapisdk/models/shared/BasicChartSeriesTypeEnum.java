package openapisdk.models.shared;


public enum BasicChartSeriesTypeEnum {
    BASIC_CHART_TYPE_UNSPECIFIED("BASIC_CHART_TYPE_UNSPECIFIED"),
    BAR("BAR"),
    LINE("LINE"),
    AREA("AREA"),
    COLUMN("COLUMN"),
    SCATTER("SCATTER"),
    COMBO("COMBO"),
    STEPPED_AREA("STEPPED_AREA");

    public final String value;

    private BasicChartSeriesTypeEnum(String value) {
        this.value = value;
    }
}
