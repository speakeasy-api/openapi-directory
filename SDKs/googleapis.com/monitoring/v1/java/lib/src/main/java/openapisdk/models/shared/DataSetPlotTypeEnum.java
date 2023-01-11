package openapisdk.models.shared;


public enum DataSetPlotTypeEnum {
    PLOT_TYPE_UNSPECIFIED("PLOT_TYPE_UNSPECIFIED"),
    LINE("LINE"),
    STACKED_AREA("STACKED_AREA"),
    STACKED_BAR("STACKED_BAR"),
    HEATMAP("HEATMAP");

    public final String value;

    private DataSetPlotTypeEnum(String value) {
        this.value = value;
    }
}
