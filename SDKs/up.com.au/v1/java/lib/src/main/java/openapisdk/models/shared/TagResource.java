package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TagResource
 * Provides information about a tag.
 * 
**/
public class TagResource {
    @JsonProperty("id")
    public String id;
    public TagResource withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("relationships")
    public TagResourceRelationships relationships;
    public TagResource withRelationships(TagResourceRelationships relationships) {
        this.relationships = relationships;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public TagResource withType(String type) {
        this.type = type;
        return this;
    }
}