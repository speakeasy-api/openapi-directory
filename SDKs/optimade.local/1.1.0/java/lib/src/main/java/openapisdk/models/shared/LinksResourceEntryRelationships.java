package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LinksResourceEntryRelationships
 * This model wraps the JSON API Relationships to include type-specific top level keys.
**/
public class LinksResourceEntryRelationships {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("references")
    public LinksResourceEntryRelationshipsReferenceRelationship references;
    public LinksResourceEntryRelationships withReferences(LinksResourceEntryRelationshipsReferenceRelationship references) {
        this.references = references;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("structures")
    public LinksResourceEntryRelationshipsStructureRelationship structures;
    public LinksResourceEntryRelationships withStructures(LinksResourceEntryRelationshipsStructureRelationship structures) {
        this.structures = structures;
        return this;
    }
}