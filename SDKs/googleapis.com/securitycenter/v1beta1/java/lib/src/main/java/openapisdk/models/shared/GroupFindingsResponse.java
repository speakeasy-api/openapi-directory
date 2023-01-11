package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GroupFindingsResponse
 * Response message for group by findings.
**/
public class GroupFindingsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupByResults")
    public GroupResult[] groupByResults;
    public GroupFindingsResponse withGroupByResults(GroupResult[] groupByResults) {
        this.groupByResults = groupByResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GroupFindingsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readTime")
    public String readTime;
    public GroupFindingsResponse withReadTime(String readTime) {
        this.readTime = readTime;
        return this;
    }
}