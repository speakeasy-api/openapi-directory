package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CategoryResourceRelationshipsParentData {
    @JsonProperty("id")
    public String id;
    public CategoryResourceRelationshipsParentData withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public CategoryResourceRelationshipsParentData withType(String type) {
        this.type = type;
        return this;
    }
}