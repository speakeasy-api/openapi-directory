package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CategoryDto {
    @JsonProperty("name")
    public String name;
    public CategoryDto withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("uuid")
    public String uuid;
    public CategoryDto withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}