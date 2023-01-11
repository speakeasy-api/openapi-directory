package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ReferenceResponseOneResponseMetaResponseMetaQuery
 * Information on the query that was requested.
**/
public class ReferenceResponseOneResponseMetaResponseMetaQuery {
    @JsonProperty("representation")
    public String representation;
    public ReferenceResponseOneResponseMetaResponseMetaQuery withRepresentation(String representation) {
        this.representation = representation;
        return this;
    }
}