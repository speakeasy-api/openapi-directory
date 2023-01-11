package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExecuteActionResponse
 * Response message for ActionService.ExecuteAction
**/
public class ExecuteActionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public java.util.Map<String, Object>[] results;
    public ExecuteActionResponse withResults(java.util.Map<String, Object>[] results) {
        this.results = results;
        return this;
    }
}