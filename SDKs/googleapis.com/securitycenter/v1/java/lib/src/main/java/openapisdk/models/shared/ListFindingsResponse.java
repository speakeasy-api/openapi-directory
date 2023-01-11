package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListFindingsResponse
 * Response message for listing findings.
**/
public class ListFindingsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listFindingsResults")
    public ListFindingsResult[] listFindingsResults;
    public ListFindingsResponse withListFindingsResults(ListFindingsResult[] listFindingsResults) {
        this.listFindingsResults = listFindingsResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListFindingsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readTime")
    public String readTime;
    public ListFindingsResponse withReadTime(String readTime) {
        this.readTime = readTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSize")
    public Integer totalSize;
    public ListFindingsResponse withTotalSize(Integer totalSize) {
        this.totalSize = totalSize;
        return this;
    }
}