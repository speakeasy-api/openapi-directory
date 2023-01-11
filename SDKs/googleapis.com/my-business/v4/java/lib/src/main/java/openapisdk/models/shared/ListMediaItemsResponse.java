package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListMediaItemsResponse
 * Response message for Media.ListMediaItems.
**/
public class ListMediaItemsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mediaItems")
    public MediaItem[] mediaItems;
    public ListMediaItemsResponse withMediaItems(MediaItem[] mediaItems) {
        this.mediaItems = mediaItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListMediaItemsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalMediaItemCount")
    public Integer totalMediaItemCount;
    public ListMediaItemsResponse withTotalMediaItemCount(Integer totalMediaItemCount) {
        this.totalMediaItemCount = totalMediaItemCount;
        return this;
    }
}