package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CategoryResourceRelationshipsChildrenData {
    @JsonProperty("id")
    public String id;
    public CategoryResourceRelationshipsChildrenData withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public CategoryResourceRelationshipsChildrenData withType(String type) {
        this.type = type;
        return this;
    }
}