package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PutServersId200ApplicationJsonServerIso
 * ISO Image that is attached to this Server. Null if no ISO is attached.
**/
public class PutServersId200ApplicationJsonServerIso {
    @JsonProperty("deprecated")
    public String deprecated;
    public PutServersId200ApplicationJsonServerIso withDeprecated(String deprecated) {
        this.deprecated = deprecated;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public PutServersId200ApplicationJsonServerIso withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PutServersId200ApplicationJsonServerIso withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PutServersId200ApplicationJsonServerIso withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("type")
    public PutServersId200ApplicationJsonServerIsoTypeEnum type;
    public PutServersId200ApplicationJsonServerIso withType(PutServersId200ApplicationJsonServerIsoTypeEnum type) {
        this.type = type;
        return this;
    }
}