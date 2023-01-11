package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EntryResource
 * The base model for an entry resource.
**/
public class EntryResource {
    @JsonProperty("attributes")
    public EntryResourceEntryResourceAttributes attributes;
    public EntryResource withAttributes(EntryResourceEntryResourceAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public EntryResource withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public EntryResourceResourceLinks links;
    public EntryResource withLinks(EntryResourceResourceLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public java.util.Map<String, Object> meta;
    public EntryResource withMeta(java.util.Map<String, Object> meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationships")
    public EntryResourceEntryRelationships relationships;
    public EntryResource withRelationships(EntryResourceEntryRelationships relationships) {
        this.relationships = relationships;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public EntryResource withType(String type) {
        this.type = type;
        return this;
    }
}