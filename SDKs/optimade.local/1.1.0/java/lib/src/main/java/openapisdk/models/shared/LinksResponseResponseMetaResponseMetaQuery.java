package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LinksResponseResponseMetaResponseMetaQuery
 * Information on the query that was requested.
**/
public class LinksResponseResponseMetaResponseMetaQuery {
    @JsonProperty("representation")
    public String representation;
    public LinksResponseResponseMetaResponseMetaQuery withRepresentation(String representation) {
        this.representation = representation;
        return this;
    }
}