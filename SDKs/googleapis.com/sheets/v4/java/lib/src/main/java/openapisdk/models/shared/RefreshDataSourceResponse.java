package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RefreshDataSourceResponse
 * The response from refreshing one or multiple data source objects.
**/
public class RefreshDataSourceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statuses")
    public RefreshDataSourceObjectExecutionStatus[] statuses;
    public RefreshDataSourceResponse withStatuses(RefreshDataSourceObjectExecutionStatus[] statuses) {
        this.statuses = statuses;
        return this;
    }
}