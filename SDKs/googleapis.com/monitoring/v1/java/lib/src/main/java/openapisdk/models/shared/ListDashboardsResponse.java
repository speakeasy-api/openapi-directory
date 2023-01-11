package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListDashboardsResponse
 * The ListDashboards request.
**/
public class ListDashboardsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dashboards")
    public Dashboard[] dashboards;
    public ListDashboardsResponse withDashboards(Dashboard[] dashboards) {
        this.dashboards = dashboards;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListDashboardsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}