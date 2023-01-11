package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchDeleteRowsRequest
 * Request message for TablesService.BatchDeleteRows
**/
public class BatchDeleteRowsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("names")
    public String[] names;
    public BatchDeleteRowsRequest withNames(String[] names) {
        this.names = names;
        return this;
    }
}