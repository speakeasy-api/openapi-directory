package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddDataSourceResponse
 * The result of adding a data source.
**/
public class AddDataSourceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataExecutionStatus")
    public DataExecutionStatus dataExecutionStatus;
    public AddDataSourceResponse withDataExecutionStatus(DataExecutionStatus dataExecutionStatus) {
        this.dataExecutionStatus = dataExecutionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSource")
    public DataSource dataSource;
    public AddDataSourceResponse withDataSource(DataSource dataSource) {
        this.dataSource = dataSource;
        return this;
    }
}