package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataSet
 * Groups a time series query definition with charting options.
**/
public class DataSet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legendTemplate")
    public String legendTemplate;
    public DataSet withLegendTemplate(String legendTemplate) {
        this.legendTemplate = legendTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minAlignmentPeriod")
    public String minAlignmentPeriod;
    public DataSet withMinAlignmentPeriod(String minAlignmentPeriod) {
        this.minAlignmentPeriod = minAlignmentPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plotType")
    public DataSetPlotTypeEnum plotType;
    public DataSet withPlotType(DataSetPlotTypeEnum plotType) {
        this.plotType = plotType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetAxis")
    public DataSetTargetAxisEnum targetAxis;
    public DataSet withTargetAxis(DataSetTargetAxisEnum targetAxis) {
        this.targetAxis = targetAxis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeSeriesQuery")
    public TimeSeriesQuery timeSeriesQuery;
    public DataSet withTimeSeriesQuery(TimeSeriesQuery timeSeriesQuery) {
        this.timeSeriesQuery = timeSeriesQuery;
        return this;
    }
}