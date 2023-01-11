package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAssetsResponse
 * ListAssets response.
**/
public class ListAssetsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assets")
    public Asset[] assets;
    public ListAssetsResponse withAssets(Asset[] assets) {
        this.assets = assets;
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
}