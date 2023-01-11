package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPlacementGroupsCreatePlacementGroupResponsePlacementGroup {
    @JsonProperty("created")
    public String created;
    public PostPlacementGroupsCreatePlacementGroupResponsePlacementGroup withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostPlacementGroupsCreatePlacementGroupResponsePlacementGroup withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public PostPlacementGroupsCreatePlacementGroupResponsePlacementGroup withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PostPlacementGroupsCreatePlacementGroupResponsePlacementGroup withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("servers")
    public Long[] servers;
    public PostPlacementGroupsCreatePlacementGroupResponsePlacementGroup withServers(Long[] servers) {
        this.servers = servers;
        return this;
    }
    @JsonProperty("type")
    public PostPlacementGroupsCreatePlacementGroupResponsePlacementGroupTypeEnum type;
    public PostPlacementGroupsCreatePlacementGroupResponsePlacementGroup withType(PostPlacementGroupsCreatePlacementGroupResponsePlacementGroupTypeEnum type) {
        this.type = type;
        return this;
    }
}