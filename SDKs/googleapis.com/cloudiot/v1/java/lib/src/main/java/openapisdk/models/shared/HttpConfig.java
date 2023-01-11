package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpConfig
 * The configuration of the HTTP bridge for a device registry.
**/
public class HttpConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpEnabledState")
    public HttpConfigHttpEnabledStateEnum httpEnabledState;
    public HttpConfig withHttpEnabledState(HttpConfigHttpEnabledStateEnum httpEnabledState) {
        this.httpEnabledState = httpEnabledState;
        return this;
    }
}