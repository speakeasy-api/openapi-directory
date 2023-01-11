package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StructureResponseOneResponseMetaResponseMetaQuery
 * Information on the query that was requested.
**/
public class StructureResponseOneResponseMetaResponseMetaQuery {
    @JsonProperty("representation")
    public String representation;
    public StructureResponseOneResponseMetaResponseMetaQuery withRepresentation(String representation) {
        this.representation = representation;
        return this;
    }
}