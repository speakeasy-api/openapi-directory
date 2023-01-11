package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueryDriveActivityRequest
 * The request message for querying Drive activity.
**/
public class QueryDriveActivityRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ancestorName")
    public String ancestorName;
    public QueryDriveActivityRequest withAncestorName(String ancestorName) {
        this.ancestorName = ancestorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consolidationStrategy")
    public ConsolidationStrategy consolidationStrategy;
    public QueryDriveActivityRequest withConsolidationStrategy(ConsolidationStrategy consolidationStrategy) {
        this.consolidationStrategy = consolidationStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public String filter;
    public QueryDriveActivityRequest withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemName")
    public String itemName;
    public QueryDriveActivityRequest withItemName(String itemName) {
        this.itemName = itemName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageSize")
    public Integer pageSize;
    public QueryDriveActivityRequest withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageToken")
    public String pageToken;
    public QueryDriveActivityRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
}