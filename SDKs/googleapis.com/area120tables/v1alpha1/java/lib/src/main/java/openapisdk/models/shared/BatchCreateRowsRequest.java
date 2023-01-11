package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchCreateRowsRequest
 * Request message for TablesService.BatchCreateRows.
**/
public class BatchCreateRowsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requests")
    public CreateRowRequest[] requests;
    public BatchCreateRowsRequest withRequests(CreateRowRequest[] requests) {
        this.requests = requests;
        return this;
    }
}