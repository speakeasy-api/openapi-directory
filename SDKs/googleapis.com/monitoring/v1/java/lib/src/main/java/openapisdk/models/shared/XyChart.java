package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * XyChart
 * A chart that displays data on a 2D (X and Y axes) plane.
**/
public class XyChart {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chartOptions")
    public ChartOptions chartOptions;
    public XyChart withChartOptions(ChartOptions chartOptions) {
        this.chartOptions = chartOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSets")
    public DataSet[] dataSets;
    public XyChart withDataSets(DataSet[] dataSets) {
        this.dataSets = dataSets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thresholds")
    public Threshold[] thresholds;
    public XyChart withThresholds(Threshold[] thresholds) {
        this.thresholds = thresholds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeshiftDuration")
    public String timeshiftDuration;
    public XyChart withTimeshiftDuration(String timeshiftDuration) {
        this.timeshiftDuration = timeshiftDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("xAxis")
    public Axis xAxis;
    public XyChart withXAxis(Axis xAxis) {
        this.xAxis = xAxis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("y2Axis")
    public Axis y2Axis;
    public XyChart withY2Axis(Axis y2Axis) {
        this.y2Axis = y2Axis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("yAxis")
    public Axis yAxis;
    public XyChart withYAxis(Axis yAxis) {
        this.yAxis = yAxis;
        return this;
    }
}