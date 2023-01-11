package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataExecutionStatus
 * The data execution status. A data execution is created to sync a data source object with the latest data from a DataSource. It is usually scheduled to run at background, you can check its state to tell if an execution completes There are several scenarios where a data execution is triggered to run: * Adding a data source creates an associated data source sheet as well as a data execution to sync the data from the data source to the sheet. * Updating a data source creates a data execution to refresh the associated data source sheet similarly. * You can send refresh request to explicitly refresh one or multiple data source objects.
**/
public class DataExecutionStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorCode")
    public DataExecutionStatusErrorCodeEnum errorCode;
    public DataExecutionStatus withErrorCode(DataExecutionStatusErrorCodeEnum errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public String errorMessage;
    public DataExecutionStatus withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastRefreshTime")
    public String lastRefreshTime;
    public DataExecutionStatus withLastRefreshTime(String lastRefreshTime) {
        this.lastRefreshTime = lastRefreshTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public DataExecutionStatusStateEnum state;
    public DataExecutionStatus withState(DataExecutionStatusStateEnum state) {
        this.state = state;
        return this;
    }
}