package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GroupFindingsRequest
 * Request message for grouping by findings.
**/
public class GroupFindingsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compareDuration")
    public String compareDuration;
    public GroupFindingsRequest withCompareDuration(String compareDuration) {
        this.compareDuration = compareDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public String filter;
    public GroupFindingsRequest withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupBy")
    public String groupBy;
    public GroupFindingsRequest withGroupBy(String groupBy) {
        this.groupBy = groupBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageSize")
    public Integer pageSize;
    public GroupFindingsRequest withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageToken")
    public String pageToken;
    public GroupFindingsRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readTime")
    public String readTime;
    public GroupFindingsRequest withReadTime(String readTime) {
        this.readTime = readTime;
        return this;
    }
}