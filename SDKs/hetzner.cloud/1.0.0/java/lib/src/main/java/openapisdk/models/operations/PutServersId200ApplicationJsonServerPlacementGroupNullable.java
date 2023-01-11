package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutServersId200ApplicationJsonServerPlacementGroupNullable {
    @JsonProperty("created")
    public String created;
    public PutServersId200ApplicationJsonServerPlacementGroupNullable withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PutServersId200ApplicationJsonServerPlacementGroupNullable withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public PutServersId200ApplicationJsonServerPlacementGroupNullable withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PutServersId200ApplicationJsonServerPlacementGroupNullable withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("servers")
    public Long[] servers;
    public PutServersId200ApplicationJsonServerPlacementGroupNullable withServers(Long[] servers) {
        this.servers = servers;
        return this;
    }
    @JsonProperty("type")
    public PutServersId200ApplicationJsonServerPlacementGroupNullableTypeEnum type;
    public PutServersId200ApplicationJsonServerPlacementGroupNullable withType(PutServersId200ApplicationJsonServerPlacementGroupNullableTypeEnum type) {
        this.type = type;
        return this;
    }
}