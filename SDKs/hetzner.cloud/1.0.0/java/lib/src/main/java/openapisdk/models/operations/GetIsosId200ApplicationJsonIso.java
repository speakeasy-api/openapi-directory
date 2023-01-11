package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetIsosId200ApplicationJsonIso {
    @JsonProperty("deprecated")
    public String deprecated;
    public GetIsosId200ApplicationJsonIso withDeprecated(String deprecated) {
        this.deprecated = deprecated;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public GetIsosId200ApplicationJsonIso withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetIsosId200ApplicationJsonIso withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetIsosId200ApplicationJsonIso withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("type")
    public GetIsosId200ApplicationJsonIsoTypeEnum type;
    public GetIsosId200ApplicationJsonIso withType(GetIsosId200ApplicationJsonIsoTypeEnum type) {
        this.type = type;
        return this;
    }
}