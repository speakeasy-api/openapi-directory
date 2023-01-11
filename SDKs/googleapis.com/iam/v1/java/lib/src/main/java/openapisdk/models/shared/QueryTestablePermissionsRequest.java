package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueryTestablePermissionsRequest
 * A request to get permissions which can be tested on a resource.
**/
public class QueryTestablePermissionsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullResourceName")
    public String fullResourceName;
    public QueryTestablePermissionsRequest withFullResourceName(String fullResourceName) {
        this.fullResourceName = fullResourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageSize")
    public Integer pageSize;
    public QueryTestablePermissionsRequest withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageToken")
    public String pageToken;
    public QueryTestablePermissionsRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
}