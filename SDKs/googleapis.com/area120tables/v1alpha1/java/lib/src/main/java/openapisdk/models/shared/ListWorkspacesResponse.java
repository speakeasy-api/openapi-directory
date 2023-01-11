package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListWorkspacesResponse
 * Response message for TablesService.ListWorkspaces.
**/
public class ListWorkspacesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListWorkspacesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workspaces")
    public Workspace[] workspaces;
    public ListWorkspacesResponse withWorkspaces(Workspace[] workspaces) {
        this.workspaces = workspaces;
        return this;
    }
}