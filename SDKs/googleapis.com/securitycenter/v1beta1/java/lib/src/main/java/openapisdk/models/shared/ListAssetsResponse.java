package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAssetsResponse
 * Response message for listing assets.
**/
public class ListAssetsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listAssetsResults")
    public ListAssetsResult[] listAssetsResults;
    public ListAssetsResponse withListAssetsResults(ListAssetsResult[] listAssetsResults) {
        this.listAssetsResults = listAssetsResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListAssetsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readTime")
    public String readTime;
    public ListAssetsResponse withReadTime(String readTime) {
        this.readTime = readTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSize")
    public Integer totalSize;
    public ListAssetsResponse withTotalSize(Integer totalSize) {
        this.totalSize = totalSize;
        return this;
    }
}