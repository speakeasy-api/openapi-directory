package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EntryInfoResponseResponseMetaResponseMetaQuery
 * Information on the query that was requested.
**/
public class EntryInfoResponseResponseMetaResponseMetaQuery {
    @JsonProperty("representation")
    public String representation;
    public EntryInfoResponseResponseMetaResponseMetaQuery withRepresentation(String representation) {
        this.representation = representation;
        return this;
    }
}