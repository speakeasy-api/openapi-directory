package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReferenceResourceEntryRelationshipsStructureRelationship
 * Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
**/
public class ReferenceResourceEntryRelationshipsStructureRelationship {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Object data;
    public ReferenceResourceEntryRelationshipsStructureRelationship withData(Object data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ReferenceResourceEntryRelationshipsStructureRelationshipRelationshipLinks links;
    public ReferenceResourceEntryRelationshipsStructureRelationship withLinks(ReferenceResourceEntryRelationshipsStructureRelationshipRelationshipLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public java.util.Map<String, Object> meta;
    public ReferenceResourceEntryRelationshipsStructureRelationship withMeta(java.util.Map<String, Object> meta) {
        this.meta = meta;
        return this;
    }
}