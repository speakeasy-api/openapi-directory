package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchUpdateRowsRequest
 * Request message for TablesService.BatchUpdateRows.
**/
public class BatchUpdateRowsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requests")
    public UpdateRowRequest[] requests;
    public BatchUpdateRowsRequest withRequests(UpdateRowRequest[] requests) {
        this.requests = requests;
        return this;
    }
}