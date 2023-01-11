package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CategoryResource
 * Provides information about a category and its ancestry.
 * 
**/
public class CategoryResource {
    @JsonProperty("attributes")
    public CategoryResourceAttributes attributes;
    public CategoryResource withAttributes(CategoryResourceAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public CategoryResource withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public CategoryResourceLinks links;
    public CategoryResource withLinks(CategoryResourceLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("relationships")
    public CategoryResourceRelationships relationships;
    public CategoryResource withRelationships(CategoryResourceRelationships relationships) {
        this.relationships = relationships;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public CategoryResource withType(String type) {
        this.type = type;
        return this;
    }
}