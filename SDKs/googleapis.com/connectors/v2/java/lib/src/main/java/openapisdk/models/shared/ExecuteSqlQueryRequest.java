package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExecuteSqlQueryRequest
 * An execute sql query request containing the query and the connection to execute it on.
**/
public class ExecuteSqlQueryRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query")
    public Query query;
    public ExecuteSqlQueryRequest withQuery(Query query) {
        this.query = query;
        return this;
    }
}