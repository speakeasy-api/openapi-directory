package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EntryResourceEntryRelationships
 * This model wraps the JSON API Relationships to include type-specific top level keys.
**/
public class EntryResourceEntryRelationships {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("references")
    public EntryResourceEntryRelationshipsReferenceRelationship references;
    public EntryResourceEntryRelationships withReferences(EntryResourceEntryRelationshipsReferenceRelationship references) {
        this.references = references;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("structures")
    public EntryResourceEntryRelationshipsStructureRelationship structures;
    public EntryResourceEntryRelationships withStructures(EntryResourceEntryRelationshipsStructureRelationship structures) {
        this.structures = structures;
        return this;
    }
}