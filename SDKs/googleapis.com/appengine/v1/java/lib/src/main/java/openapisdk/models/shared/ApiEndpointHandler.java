package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApiEndpointHandler
 * Uses Google Cloud Endpoints to handle requests.
**/
public class ApiEndpointHandler {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scriptPath")
    public String scriptPath;
    public ApiEndpointHandler withScriptPath(String scriptPath) {
        this.scriptPath = scriptPath;
        return this;
    }
}