package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReferenceResourceEntryRelationships
 * This model wraps the JSON API Relationships to include type-specific top level keys.
**/
public class ReferenceResourceEntryRelationships {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("references")
    public ReferenceResourceEntryRelationshipsReferenceRelationship references;
    public ReferenceResourceEntryRelationships withReferences(ReferenceResourceEntryRelationshipsReferenceRelationship references) {
        this.references = references;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("structures")
    public ReferenceResourceEntryRelationshipsStructureRelationship structures;
    public ReferenceResourceEntryRelationships withStructures(ReferenceResourceEntryRelationshipsStructureRelationship structures) {
        this.structures = structures;
        return this;
    }
}