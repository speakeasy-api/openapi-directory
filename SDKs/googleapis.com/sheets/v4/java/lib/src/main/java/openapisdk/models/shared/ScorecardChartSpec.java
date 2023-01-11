package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScorecardChartSpec
 * A scorecard chart. Scorecard charts are used to highlight key performance indicators, known as KPIs, on the spreadsheet. A scorecard chart can represent things like total sales, average cost, or a top selling item. You can specify a single data value, or aggregate over a range of data. Percentage or absolute difference from a baseline value can be highlighted, like changes over time.
**/
public class ScorecardChartSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregateType")
    public ScorecardChartSpecAggregateTypeEnum aggregateType;
    public ScorecardChartSpec withAggregateType(ScorecardChartSpecAggregateTypeEnum aggregateType) {
        this.aggregateType = aggregateType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baselineValueData")
    public ChartData baselineValueData;
    public ScorecardChartSpec withBaselineValueData(ChartData baselineValueData) {
        this.baselineValueData = baselineValueData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baselineValueFormat")
    public BaselineValueFormat baselineValueFormat;
    public ScorecardChartSpec withBaselineValueFormat(BaselineValueFormat baselineValueFormat) {
        this.baselineValueFormat = baselineValueFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFormatOptions")
    public ChartCustomNumberFormatOptions customFormatOptions;
    public ScorecardChartSpec withCustomFormatOptions(ChartCustomNumberFormatOptions customFormatOptions) {
        this.customFormatOptions = customFormatOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyValueData")
    public ChartData keyValueData;
    public ScorecardChartSpec withKeyValueData(ChartData keyValueData) {
        this.keyValueData = keyValueData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyValueFormat")
    public KeyValueFormat keyValueFormat;
    public ScorecardChartSpec withKeyValueFormat(KeyValueFormat keyValueFormat) {
        this.keyValueFormat = keyValueFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberFormatSource")
    public ScorecardChartSpecNumberFormatSourceEnum numberFormatSource;
    public ScorecardChartSpec withNumberFormatSource(ScorecardChartSpecNumberFormatSourceEnum numberFormatSource) {
        this.numberFormatSource = numberFormatSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scaleFactor")
    public Double scaleFactor;
    public ScorecardChartSpec withScaleFactor(Double scaleFactor) {
        this.scaleFactor = scaleFactor;
        return this;
    }
}