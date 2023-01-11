package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutPlacementGroupsIdPlacementGroupResponsePlacementGroup {
    @JsonProperty("created")
    public String created;
    public PutPlacementGroupsIdPlacementGroupResponsePlacementGroup withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PutPlacementGroupsIdPlacementGroupResponsePlacementGroup withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public PutPlacementGroupsIdPlacementGroupResponsePlacementGroup withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PutPlacementGroupsIdPlacementGroupResponsePlacementGroup withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("servers")
    public Long[] servers;
    public PutPlacementGroupsIdPlacementGroupResponsePlacementGroup withServers(Long[] servers) {
        this.servers = servers;
        return this;
    }
    @JsonProperty("type")
    public PutPlacementGroupsIdPlacementGroupResponsePlacementGroupTypeEnum type;
    public PutPlacementGroupsIdPlacementGroupResponsePlacementGroup withType(PutPlacementGroupsIdPlacementGroupResponsePlacementGroupTypeEnum type) {
        this.type = type;
        return this;
    }
}