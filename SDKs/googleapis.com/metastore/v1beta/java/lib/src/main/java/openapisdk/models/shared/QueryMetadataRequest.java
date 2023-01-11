package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueryMetadataRequest
 * Request message for DataprocMetastore.QueryMetadata.
**/
public class QueryMetadataRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query")
    public String query;
    public QueryMetadataRequest withQuery(String query) {
        this.query = query;
        return this;
    }
}