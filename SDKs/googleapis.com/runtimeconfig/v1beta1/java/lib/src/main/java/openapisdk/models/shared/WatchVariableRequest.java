package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WatchVariableRequest
 * Request for the `WatchVariable()` method.
**/
public class WatchVariableRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newerThan")
    public String newerThan;
    public WatchVariableRequest withNewerThan(String newerThan) {
        this.newerThan = newerThan;
        return this;
    }
}