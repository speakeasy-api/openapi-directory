package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LinksResource
 * A Links endpoint resource object
**/
public class LinksResource {
    @JsonProperty("attributes")
    public LinksResourceLinksResourceAttributes attributes;
    public LinksResource withAttributes(LinksResourceLinksResourceAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public LinksResource withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public LinksResourceResourceLinks links;
    public LinksResource withLinks(LinksResourceResourceLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public java.util.Map<String, Object> meta;
    public LinksResource withMeta(java.util.Map<String, Object> meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationships")
    public LinksResourceEntryRelationships relationships;
    public LinksResource withRelationships(LinksResourceEntryRelationships relationships) {
        this.relationships = relationships;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public LinksResource withType(String type) {
        this.type = type;
        return this;
    }
}