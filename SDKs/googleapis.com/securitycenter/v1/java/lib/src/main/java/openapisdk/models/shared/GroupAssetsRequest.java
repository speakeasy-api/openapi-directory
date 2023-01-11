package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GroupAssetsRequest
 * Request message for grouping by assets.
**/
public class GroupAssetsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compareDuration")
    public String compareDuration;
    public GroupAssetsRequest withCompareDuration(String compareDuration) {
        this.compareDuration = compareDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public String filter;
    public GroupAssetsRequest withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupBy")
    public String groupBy;
    public GroupAssetsRequest withGroupBy(String groupBy) {
        this.groupBy = groupBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageSize")
    public Integer pageSize;
    public GroupAssetsRequest withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageToken")
    public String pageToken;
    public GroupAssetsRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readTime")
    public String readTime;
    public GroupAssetsRequest withReadTime(String readTime) {
        this.readTime = readTime;
        return this;
    }
}