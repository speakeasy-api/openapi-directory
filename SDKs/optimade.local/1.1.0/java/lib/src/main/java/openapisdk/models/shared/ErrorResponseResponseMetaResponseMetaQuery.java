package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ErrorResponseResponseMetaResponseMetaQuery
 * Information on the query that was requested.
**/
public class ErrorResponseResponseMetaResponseMetaQuery {
    @JsonProperty("representation")
    public String representation;
    public ErrorResponseResponseMetaResponseMetaQuery withRepresentation(String representation) {
        this.representation = representation;
        return this;
    }
}