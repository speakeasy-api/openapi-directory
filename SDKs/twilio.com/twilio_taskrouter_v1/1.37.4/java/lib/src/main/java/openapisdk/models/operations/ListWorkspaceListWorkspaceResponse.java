package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListWorkspaceListWorkspaceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListWorkspaceListWorkspaceResponseMeta meta;
    public ListWorkspaceListWorkspaceResponse withMeta(ListWorkspaceListWorkspaceResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workspaces")
    public openapisdk.models.shared.TaskrouterV1Workspace[] workspaces;
    public ListWorkspaceListWorkspaceResponse withWorkspaces(openapisdk.models.shared.TaskrouterV1Workspace[] workspaces) {
        this.workspaces = workspaces;
        return this;
    }
}