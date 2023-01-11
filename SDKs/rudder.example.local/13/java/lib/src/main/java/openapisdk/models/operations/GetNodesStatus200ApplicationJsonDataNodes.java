package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetNodesStatus200ApplicationJsonDataNodes {
    @JsonProperty("id")
    public String id;
    public GetNodesStatus200ApplicationJsonDataNodes withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("status")
    public GetNodesStatus200ApplicationJsonDataNodesStatusEnum status;
    public GetNodesStatus200ApplicationJsonDataNodes withStatus(GetNodesStatus200ApplicationJsonDataNodesStatusEnum status) {
        this.status = status;
        return this;
    }
}