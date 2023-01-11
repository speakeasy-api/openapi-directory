package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListRuntimesResponse
 * Response for listing Managed Notebook Runtimes.
**/
public class ListRuntimesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListRuntimesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runtimes")
    public Runtime[] runtimes;
    public ListRuntimesResponse withRuntimes(Runtime[] runtimes) {
        this.runtimes = runtimes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListRuntimesResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}