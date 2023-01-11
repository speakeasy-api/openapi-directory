package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataSourceSheetProperties
 * Additional properties of a DATA_SOURCE sheet.
**/
public class DataSourceSheetProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columns")
    public DataSourceColumn[] columns;
    public DataSourceSheetProperties withColumns(DataSourceColumn[] columns) {
        this.columns = columns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataExecutionStatus")
    public DataExecutionStatus dataExecutionStatus;
    public DataSourceSheetProperties withDataExecutionStatus(DataExecutionStatus dataExecutionStatus) {
        this.dataExecutionStatus = dataExecutionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourceId")
    public String dataSourceId;
    public DataSourceSheetProperties withDataSourceId(String dataSourceId) {
        this.dataSourceId = dataSourceId;
        return this;
    }
}