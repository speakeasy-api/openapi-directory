package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPlacementGroupsIdPlacementGroupResponsePlacementGroup {
    @JsonProperty("created")
    public String created;
    public GetPlacementGroupsIdPlacementGroupResponsePlacementGroup withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetPlacementGroupsIdPlacementGroupResponsePlacementGroup withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GetPlacementGroupsIdPlacementGroupResponsePlacementGroup withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetPlacementGroupsIdPlacementGroupResponsePlacementGroup withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("servers")
    public Long[] servers;
    public GetPlacementGroupsIdPlacementGroupResponsePlacementGroup withServers(Long[] servers) {
        this.servers = servers;
        return this;
    }
    @JsonProperty("type")
    public GetPlacementGroupsIdPlacementGroupResponsePlacementGroupTypeEnum type;
    public GetPlacementGroupsIdPlacementGroupResponsePlacementGroup withType(GetPlacementGroupsIdPlacementGroupResponsePlacementGroupTypeEnum type) {
        this.type = type;
        return this;
    }
}