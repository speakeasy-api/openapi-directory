package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StructureResourceEntryRelationships
 * This model wraps the JSON API Relationships to include type-specific top level keys.
**/
public class StructureResourceEntryRelationships {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("references")
    public StructureResourceEntryRelationshipsReferenceRelationship references;
    public StructureResourceEntryRelationships withReferences(StructureResourceEntryRelationshipsReferenceRelationship references) {
        this.references = references;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("structures")
    public StructureResourceEntryRelationshipsStructureRelationship structures;
    public StructureResourceEntryRelationships withStructures(StructureResourceEntryRelationshipsStructureRelationship structures) {
        this.structures = structures;
        return this;
    }
}