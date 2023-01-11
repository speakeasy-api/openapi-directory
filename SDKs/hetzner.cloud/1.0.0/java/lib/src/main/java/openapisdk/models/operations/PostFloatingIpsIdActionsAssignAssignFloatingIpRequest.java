package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostFloatingIpsIdActionsAssignAssignFloatingIpRequest {
    @JsonProperty("server")
    public Long server;
    public PostFloatingIpsIdActionsAssignAssignFloatingIpRequest withServer(Long server) {
        this.server = server;
        return this;
    }
}