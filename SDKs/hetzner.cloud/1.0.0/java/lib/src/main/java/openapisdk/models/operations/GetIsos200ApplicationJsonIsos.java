package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetIsos200ApplicationJsonIsos {
    @JsonProperty("deprecated")
    public String deprecated;
    public GetIsos200ApplicationJsonIsos withDeprecated(String deprecated) {
        this.deprecated = deprecated;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public GetIsos200ApplicationJsonIsos withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetIsos200ApplicationJsonIsos withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetIsos200ApplicationJsonIsos withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("type")
    public GetIsos200ApplicationJsonIsosTypeEnum type;
    public GetIsos200ApplicationJsonIsos withType(GetIsos200ApplicationJsonIsosTypeEnum type) {
        this.type = type;
        return this;
    }
}