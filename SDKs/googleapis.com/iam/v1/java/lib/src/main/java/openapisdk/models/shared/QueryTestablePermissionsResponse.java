package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueryTestablePermissionsResponse
 * The response containing permissions which can be tested on a resource.
**/
public class QueryTestablePermissionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public QueryTestablePermissionsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public Permission[] permissions;
    public QueryTestablePermissionsResponse withPermissions(Permission[] permissions) {
        this.permissions = permissions;
        return this;
    }
}