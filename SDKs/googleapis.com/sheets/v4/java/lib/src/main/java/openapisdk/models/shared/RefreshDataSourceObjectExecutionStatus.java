package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RefreshDataSourceObjectExecutionStatus
 * The execution status of refreshing one data source object.
**/
public class RefreshDataSourceObjectExecutionStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataExecutionStatus")
    public DataExecutionStatus dataExecutionStatus;
    public RefreshDataSourceObjectExecutionStatus withDataExecutionStatus(DataExecutionStatus dataExecutionStatus) {
        this.dataExecutionStatus = dataExecutionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reference")
    public DataSourceObjectReference reference;
    public RefreshDataSourceObjectExecutionStatus withReference(DataSourceObjectReference reference) {
        this.reference = reference;
        return this;
    }
}