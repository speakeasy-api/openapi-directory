package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExecuteActionRequest
 * Request message for ActionService.ExecuteAction
**/
public class ExecuteActionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public java.util.Map<String, Object> parameters;
    public ExecuteActionRequest withParameters(java.util.Map<String, Object> parameters) {
        this.parameters = parameters;
        return this;
    }
}