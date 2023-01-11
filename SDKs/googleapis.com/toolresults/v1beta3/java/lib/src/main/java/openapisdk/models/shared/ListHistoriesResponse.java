package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListHistoriesResponse
 * Response message for HistoryService.List
**/
public class ListHistoriesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("histories")
    public History[] histories;
    public ListHistoriesResponse withHistories(History[] histories) {
        this.histories = histories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListHistoriesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}