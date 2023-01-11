package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueryGrantableRolesRequest
 * The grantable role query request.
**/
public class QueryGrantableRolesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullResourceName")
    public String fullResourceName;
    public QueryGrantableRolesRequest withFullResourceName(String fullResourceName) {
        this.fullResourceName = fullResourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageSize")
    public Integer pageSize;
    public QueryGrantableRolesRequest withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageToken")
    public String pageToken;
    public QueryGrantableRolesRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("view")
    public QueryGrantableRolesRequestViewEnum view;
    public QueryGrantableRolesRequest withView(QueryGrantableRolesRequestViewEnum view) {
        this.view = view;
        return this;
    }
}