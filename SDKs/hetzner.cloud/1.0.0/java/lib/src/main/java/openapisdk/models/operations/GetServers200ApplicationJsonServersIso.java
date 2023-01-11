package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetServers200ApplicationJsonServersIso
 * ISO Image that is attached to this Server. Null if no ISO is attached.
**/
public class GetServers200ApplicationJsonServersIso {
    @JsonProperty("deprecated")
    public String deprecated;
    public GetServers200ApplicationJsonServersIso withDeprecated(String deprecated) {
        this.deprecated = deprecated;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public GetServers200ApplicationJsonServersIso withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetServers200ApplicationJsonServersIso withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetServers200ApplicationJsonServersIso withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("type")
    public GetServers200ApplicationJsonServersIsoTypeEnum type;
    public GetServers200ApplicationJsonServersIso withType(GetServers200ApplicationJsonServersIsoTypeEnum type) {
        this.type = type;
        return this;
    }
}