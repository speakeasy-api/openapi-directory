package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListLikedAssetsResponse
 * A response message from a request to list.
**/
public class ListLikedAssetsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assets")
    public Asset[] assets;
    public ListLikedAssetsResponse withAssets(Asset[] assets) {
        this.assets = assets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListLikedAssetsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSize")
    public Integer totalSize;
    public ListLikedAssetsResponse withTotalSize(Integer totalSize) {
        this.totalSize = totalSize;
        return this;
    }
}