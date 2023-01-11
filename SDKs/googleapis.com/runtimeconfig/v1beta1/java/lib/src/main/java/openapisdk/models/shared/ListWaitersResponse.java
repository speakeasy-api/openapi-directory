package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListWaitersResponse
 * Response for the `ListWaiters()` method. Order of returned waiter objects is arbitrary.
**/
public class ListWaitersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListWaitersResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waiters")
    public Waiter[] waiters;
    public ListWaitersResponse withWaiters(Waiter[] waiters) {
        this.waiters = waiters;
        return this;
    }
}