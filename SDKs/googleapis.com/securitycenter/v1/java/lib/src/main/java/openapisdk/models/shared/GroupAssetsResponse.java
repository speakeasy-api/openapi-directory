package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GroupAssetsResponse
 * Response message for grouping by assets.
**/
public class GroupAssetsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupByResults")
    public GroupResult[] groupByResults;
    public GroupAssetsResponse withGroupByResults(GroupResult[] groupByResults) {
        this.groupByResults = groupByResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GroupAssetsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readTime")
    public String readTime;
    public GroupAssetsResponse withReadTime(String readTime) {
        this.readTime = readTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSize")
    public Integer totalSize;
    public GroupAssetsResponse withTotalSize(Integer totalSize) {
        this.totalSize = totalSize;
        return this;
    }
}