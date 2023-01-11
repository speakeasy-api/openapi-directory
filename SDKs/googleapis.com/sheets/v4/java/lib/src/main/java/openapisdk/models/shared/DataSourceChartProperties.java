package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataSourceChartProperties
 * Properties of a data source chart.
**/
public class DataSourceChartProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataExecutionStatus")
    public DataExecutionStatus dataExecutionStatus;
    public DataSourceChartProperties withDataExecutionStatus(DataExecutionStatus dataExecutionStatus) {
        this.dataExecutionStatus = dataExecutionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourceId")
    public String dataSourceId;
    public DataSourceChartProperties withDataSourceId(String dataSourceId) {
        this.dataSourceId = dataSourceId;
        return this;
    }
}