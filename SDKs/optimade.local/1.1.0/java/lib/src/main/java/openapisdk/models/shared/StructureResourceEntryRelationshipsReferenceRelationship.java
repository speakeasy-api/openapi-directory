package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StructureResourceEntryRelationshipsReferenceRelationship
 * Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
**/
public class StructureResourceEntryRelationshipsReferenceRelationship {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Object data;
    public StructureResourceEntryRelationshipsReferenceRelationship withData(Object data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public StructureResourceEntryRelationshipsReferenceRelationshipRelationshipLinks links;
    public StructureResourceEntryRelationshipsReferenceRelationship withLinks(StructureResourceEntryRelationshipsReferenceRelationshipRelationshipLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public java.util.Map<String, Object> meta;
    public StructureResourceEntryRelationshipsReferenceRelationship withMeta(java.util.Map<String, Object> meta) {
        this.meta = meta;
        return this;
    }
}