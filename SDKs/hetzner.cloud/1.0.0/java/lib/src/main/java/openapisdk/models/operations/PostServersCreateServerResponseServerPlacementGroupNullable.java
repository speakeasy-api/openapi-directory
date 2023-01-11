package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersCreateServerResponseServerPlacementGroupNullable {
    @JsonProperty("created")
    public String created;
    public PostServersCreateServerResponseServerPlacementGroupNullable withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostServersCreateServerResponseServerPlacementGroupNullable withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public PostServersCreateServerResponseServerPlacementGroupNullable withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PostServersCreateServerResponseServerPlacementGroupNullable withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("servers")
    public Long[] servers;
    public PostServersCreateServerResponseServerPlacementGroupNullable withServers(Long[] servers) {
        this.servers = servers;
        return this;
    }
    @JsonProperty("type")
    public PostServersCreateServerResponseServerPlacementGroupNullableTypeEnum type;
    public PostServersCreateServerResponseServerPlacementGroupNullable withType(PostServersCreateServerResponseServerPlacementGroupNullableTypeEnum type) {
        this.type = type;
        return this;
    }
}