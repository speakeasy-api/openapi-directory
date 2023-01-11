package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListRuntimesResponse
 * Response for the `ListRuntimes` method.
**/
public class ListRuntimesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runtimes")
    public Runtime[] runtimes;
    public ListRuntimesResponse withRuntimes(Runtime[] runtimes) {
        this.runtimes = runtimes;
        return this;
    }
}