package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListWatchesResponse
 * The response of a ListWatchesRequest.
**/
public class ListWatchesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("watches")
    public Watch[] watches;
    public ListWatchesResponse withWatches(Watch[] watches) {
        this.watches = watches;
        return this;
    }
}