package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetServers200ApplicationJsonServersPlacementGroupNullable {
    @JsonProperty("created")
    public String created;
    public GetServers200ApplicationJsonServersPlacementGroupNullable withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetServers200ApplicationJsonServersPlacementGroupNullable withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GetServers200ApplicationJsonServersPlacementGroupNullable withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetServers200ApplicationJsonServersPlacementGroupNullable withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("servers")
    public Long[] servers;
    public GetServers200ApplicationJsonServersPlacementGroupNullable withServers(Long[] servers) {
        this.servers = servers;
        return this;
    }
    @JsonProperty("type")
    public GetServers200ApplicationJsonServersPlacementGroupNullableTypeEnum type;
    public GetServers200ApplicationJsonServersPlacementGroupNullable withType(GetServers200ApplicationJsonServersPlacementGroupNullableTypeEnum type) {
        this.type = type;
        return this;
    }
}