package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetServersId200ApplicationJsonServerIso
 * ISO Image that is attached to this Server. Null if no ISO is attached.
**/
public class GetServersId200ApplicationJsonServerIso {
    @JsonProperty("deprecated")
    public String deprecated;
    public GetServersId200ApplicationJsonServerIso withDeprecated(String deprecated) {
        this.deprecated = deprecated;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public GetServersId200ApplicationJsonServerIso withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetServersId200ApplicationJsonServerIso withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetServersId200ApplicationJsonServerIso withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("type")
    public GetServersId200ApplicationJsonServerIsoTypeEnum type;
    public GetServersId200ApplicationJsonServerIso withType(GetServersId200ApplicationJsonServerIsoTypeEnum type) {
        this.type = type;
        return this;
    }
}