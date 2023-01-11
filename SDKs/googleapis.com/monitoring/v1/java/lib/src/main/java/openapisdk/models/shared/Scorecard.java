package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Scorecard
 * A widget showing the latest value of a metric, and how this value relates to one or more thresholds.
**/
public class Scorecard {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gaugeView")
    public GaugeView gaugeView;
    public Scorecard withGaugeView(GaugeView gaugeView) {
        this.gaugeView = gaugeView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sparkChartView")
    public SparkChartView sparkChartView;
    public Scorecard withSparkChartView(SparkChartView sparkChartView) {
        this.sparkChartView = sparkChartView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thresholds")
    public Threshold[] thresholds;
    public Scorecard withThresholds(Threshold[] thresholds) {
        this.thresholds = thresholds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeSeriesQuery")
    public TimeSeriesQuery timeSeriesQuery;
    public Scorecard withTimeSeriesQuery(TimeSeriesQuery timeSeriesQuery) {
        this.timeSeriesQuery = timeSeriesQuery;
        return this;
    }
}