package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TimeSeriesTable
 * A table that displays time series data.
**/
public class TimeSeriesTable {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columnSettings")
    public ColumnSettings[] columnSettings;
    public TimeSeriesTable withColumnSettings(ColumnSettings[] columnSettings) {
        this.columnSettings = columnSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSets")
    public TableDataSet[] dataSets;
    public TimeSeriesTable withDataSets(TableDataSet[] dataSets) {
        this.dataSets = dataSets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricVisualization")
    public TimeSeriesTableMetricVisualizationEnum metricVisualization;
    public TimeSeriesTable withMetricVisualization(TimeSeriesTableMetricVisualizationEnum metricVisualization) {
        this.metricVisualization = metricVisualization;
        return this;
    }
}