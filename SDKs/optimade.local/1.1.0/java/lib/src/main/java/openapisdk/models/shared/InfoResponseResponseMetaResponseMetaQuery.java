package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * InfoResponseResponseMetaResponseMetaQuery
 * Information on the query that was requested.
**/
public class InfoResponseResponseMetaResponseMetaQuery {
    @JsonProperty("representation")
    public String representation;
    public InfoResponseResponseMetaResponseMetaQuery withRepresentation(String representation) {
        this.representation = representation;
        return this;
    }
}