package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPlacementGroupsPlacementGroupsResponsePlacementGroup {
    @JsonProperty("created")
    public String created;
    public GetPlacementGroupsPlacementGroupsResponsePlacementGroup withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetPlacementGroupsPlacementGroupsResponsePlacementGroup withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GetPlacementGroupsPlacementGroupsResponsePlacementGroup withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetPlacementGroupsPlacementGroupsResponsePlacementGroup withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("servers")
    public Long[] servers;
    public GetPlacementGroupsPlacementGroupsResponsePlacementGroup withServers(Long[] servers) {
        this.servers = servers;
        return this;
    }
    @JsonProperty("type")
    public GetPlacementGroupsPlacementGroupsResponsePlacementGroupTypeEnum type;
    public GetPlacementGroupsPlacementGroupsResponsePlacementGroup withType(GetPlacementGroupsPlacementGroupsResponsePlacementGroupTypeEnum type) {
        this.type = type;
        return this;
    }
}