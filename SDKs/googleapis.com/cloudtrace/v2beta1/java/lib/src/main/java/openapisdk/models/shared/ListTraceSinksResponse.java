package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListTraceSinksResponse
 * Result returned from `ListTraceSinks`.
**/
public class ListTraceSinksResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListTraceSinksResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sinks")
    public TraceSink[] sinks;
    public ListTraceSinksResponse withSinks(TraceSink[] sinks) {
        this.sinks = sinks;
        return this;
    }
}