package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Resource
 * Resource objects appear in a JSON API document to represent resources.
**/
public class Resource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public java.util.Map<String, Object> attributes;
    public Resource withAttributes(java.util.Map<String, Object> attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Resource withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ResourceResourceLinks links;
    public Resource withLinks(ResourceResourceLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public java.util.Map<String, Object> meta;
    public Resource withMeta(java.util.Map<String, Object> meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationships")
    public java.util.Map<String, Object> relationships;
    public Resource withRelationships(java.util.Map<String, Object> relationships) {
        this.relationships = relationships;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public Resource withType(String type) {
        this.type = type;
        return this;
    }
}