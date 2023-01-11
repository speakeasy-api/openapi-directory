package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WaterfallChartSeries
 * A single series of data for a waterfall chart.
**/
public class WaterfallChartSeries {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customSubtotals")
    public WaterfallChartCustomSubtotal[] customSubtotals;
    public WaterfallChartSeries withCustomSubtotals(WaterfallChartCustomSubtotal[] customSubtotals) {
        this.customSubtotals = customSubtotals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ChartData data;
    public WaterfallChartSeries withData(ChartData data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataLabel")
    public DataLabel dataLabel;
    public WaterfallChartSeries withDataLabel(DataLabel dataLabel) {
        this.dataLabel = dataLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hideTrailingSubtotal")
    public Boolean hideTrailingSubtotal;
    public WaterfallChartSeries withHideTrailingSubtotal(Boolean hideTrailingSubtotal) {
        this.hideTrailingSubtotal = hideTrailingSubtotal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("negativeColumnsStyle")
    public WaterfallChartColumnStyle negativeColumnsStyle;
    public WaterfallChartSeries withNegativeColumnsStyle(WaterfallChartColumnStyle negativeColumnsStyle) {
        this.negativeColumnsStyle = negativeColumnsStyle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("positiveColumnsStyle")
    public WaterfallChartColumnStyle positiveColumnsStyle;
    public WaterfallChartSeries withPositiveColumnsStyle(WaterfallChartColumnStyle positiveColumnsStyle) {
        this.positiveColumnsStyle = positiveColumnsStyle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subtotalColumnsStyle")
    public WaterfallChartColumnStyle subtotalColumnsStyle;
    public WaterfallChartSeries withSubtotalColumnsStyle(WaterfallChartColumnStyle subtotalColumnsStyle) {
        this.subtotalColumnsStyle = subtotalColumnsStyle;
        return this;
    }
}