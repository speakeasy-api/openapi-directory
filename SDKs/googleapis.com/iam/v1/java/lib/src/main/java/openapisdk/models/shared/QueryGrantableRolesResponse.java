package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueryGrantableRolesResponse
 * The grantable role query response.
**/
public class QueryGrantableRolesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public QueryGrantableRolesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roles")
    public Role[] roles;
    public QueryGrantableRolesResponse withRoles(Role[] roles) {
        this.roles = roles;
        return this;
    }
}