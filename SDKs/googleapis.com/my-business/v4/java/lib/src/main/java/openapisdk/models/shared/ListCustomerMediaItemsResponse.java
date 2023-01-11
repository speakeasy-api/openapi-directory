package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListCustomerMediaItemsResponse
 * Response message for Media.ListCustomerMediaItems.
**/
public class ListCustomerMediaItemsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mediaItems")
    public MediaItem[] mediaItems;
    public ListCustomerMediaItemsResponse withMediaItems(MediaItem[] mediaItems) {
        this.mediaItems = mediaItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListCustomerMediaItemsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalMediaItemCount")
    public Integer totalMediaItemCount;
    public ListCustomerMediaItemsResponse withTotalMediaItemCount(Integer totalMediaItemCount) {
        this.totalMediaItemCount = totalMediaItemCount;
        return this;
    }
}