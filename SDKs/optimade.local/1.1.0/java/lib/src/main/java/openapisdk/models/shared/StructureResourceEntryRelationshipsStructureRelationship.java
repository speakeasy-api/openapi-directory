package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StructureResourceEntryRelationshipsStructureRelationship
 * Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
**/
public class StructureResourceEntryRelationshipsStructureRelationship {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Object data;
    public StructureResourceEntryRelationshipsStructureRelationship withData(Object data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public StructureResourceEntryRelationshipsStructureRelationshipRelationshipLinks links;
    public StructureResourceEntryRelationshipsStructureRelationship withLinks(StructureResourceEntryRelationshipsStructureRelationshipRelationshipLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public java.util.Map<String, Object> meta;
    public StructureResourceEntryRelationshipsStructureRelationship withMeta(java.util.Map<String, Object> meta) {
        this.meta = meta;
        return this;
    }
}