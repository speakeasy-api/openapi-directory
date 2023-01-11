package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AsyncOptions
 * Async options that determine when a resource should finish.
**/
public class AsyncOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("methodMatch")
    public String methodMatch;
    public AsyncOptions withMethodMatch(String methodMatch) {
        this.methodMatch = methodMatch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pollingOptions")
    public PollingOptions pollingOptions;
    public AsyncOptions withPollingOptions(PollingOptions pollingOptions) {
        this.pollingOptions = pollingOptions;
        return this;
    }
}