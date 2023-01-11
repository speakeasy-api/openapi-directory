package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetServersId200ApplicationJsonServerPlacementGroupNullable {
    @JsonProperty("created")
    public String created;
    public GetServersId200ApplicationJsonServerPlacementGroupNullable withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetServersId200ApplicationJsonServerPlacementGroupNullable withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GetServersId200ApplicationJsonServerPlacementGroupNullable withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetServersId200ApplicationJsonServerPlacementGroupNullable withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("servers")
    public Long[] servers;
    public GetServersId200ApplicationJsonServerPlacementGroupNullable withServers(Long[] servers) {
        this.servers = servers;
        return this;
    }
    @JsonProperty("type")
    public GetServersId200ApplicationJsonServerPlacementGroupNullableTypeEnum type;
    public GetServersId200ApplicationJsonServerPlacementGroupNullable withType(GetServersId200ApplicationJsonServerPlacementGroupNullableTypeEnum type) {
        this.type = type;
        return this;
    }
}