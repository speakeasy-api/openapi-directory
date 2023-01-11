package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StructureResponseManyResponseMetaResponseMetaQuery
 * Information on the query that was requested.
**/
public class StructureResponseManyResponseMetaResponseMetaQuery {
    @JsonProperty("representation")
    public String representation;
    public StructureResponseManyResponseMetaResponseMetaQuery withRepresentation(String representation) {
        this.representation = representation;
        return this;
    }
}