package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataSourceFormula
 * A data source formula.
**/
public class DataSourceFormula {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataExecutionStatus")
    public DataExecutionStatus dataExecutionStatus;
    public DataSourceFormula withDataExecutionStatus(DataExecutionStatus dataExecutionStatus) {
        this.dataExecutionStatus = dataExecutionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourceId")
    public String dataSourceId;
    public DataSourceFormula withDataSourceId(String dataSourceId) {
        this.dataSourceId = dataSourceId;
        return this;
    }
}