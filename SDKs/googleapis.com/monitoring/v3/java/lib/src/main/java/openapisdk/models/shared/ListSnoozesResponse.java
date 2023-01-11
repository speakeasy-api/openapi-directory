package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListSnoozesResponse
 * The results of a successful ListSnoozes call, containing the matching Snoozes.
**/
public class ListSnoozesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListSnoozesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snoozes")
    public Snooze[] snoozes;
    public ListSnoozesResponse withSnoozes(Snooze[] snoozes) {
        this.snoozes = snoozes;
        return this;
    }
}