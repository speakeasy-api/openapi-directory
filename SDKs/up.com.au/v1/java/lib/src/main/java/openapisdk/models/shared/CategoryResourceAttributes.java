package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CategoryResourceAttributes {
    @JsonProperty("name")
    public String name;
    public CategoryResourceAttributes withName(String name) {
        this.name = name;
        return this;
    }
}