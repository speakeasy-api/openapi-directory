package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ReferenceResponseManyResponseMetaResponseMetaQuery
 * Information on the query that was requested.
**/
public class ReferenceResponseManyResponseMetaResponseMetaQuery {
    @JsonProperty("representation")
    public String representation;
    public ReferenceResponseManyResponseMetaResponseMetaQuery withRepresentation(String representation) {
        this.representation = representation;
        return this;
    }
}