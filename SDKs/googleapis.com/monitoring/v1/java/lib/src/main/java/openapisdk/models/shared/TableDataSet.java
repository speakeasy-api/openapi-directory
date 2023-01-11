package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TableDataSet
 * Groups a time series query definition with table options.
**/
public class TableDataSet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minAlignmentPeriod")
    public String minAlignmentPeriod;
    public TableDataSet withMinAlignmentPeriod(String minAlignmentPeriod) {
        this.minAlignmentPeriod = minAlignmentPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tableDisplayOptions")
    public TableDisplayOptions tableDisplayOptions;
    public TableDataSet withTableDisplayOptions(TableDisplayOptions tableDisplayOptions) {
        this.tableDisplayOptions = tableDisplayOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tableTemplate")
    public String tableTemplate;
    public TableDataSet withTableTemplate(String tableTemplate) {
        this.tableTemplate = tableTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeSeriesQuery")
    public TimeSeriesQuery timeSeriesQuery;
    public TableDataSet withTimeSeriesQuery(TimeSeriesQuery timeSeriesQuery) {
        this.timeSeriesQuery = timeSeriesQuery;
        return this;
    }
}