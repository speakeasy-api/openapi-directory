package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StructureResource
 * Representing a structure.
**/
public class StructureResource {
    @JsonProperty("attributes")
    public StructureResourceAttributes attributes;
    public StructureResource withAttributes(StructureResourceAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public StructureResource withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public StructureResourceResourceLinks links;
    public StructureResource withLinks(StructureResourceResourceLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public java.util.Map<String, Object> meta;
    public StructureResource withMeta(java.util.Map<String, Object> meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationships")
    public StructureResourceEntryRelationships relationships;
    public StructureResource withRelationships(StructureResourceEntryRelationships relationships) {
        this.relationships = relationships;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public StructureResource withType(String type) {
        this.type = type;
        return this;
    }
}