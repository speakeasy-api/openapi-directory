package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueryList
 * A list of queries to run on a cluster.
**/
public class QueryList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queries")
    public String[] queries;
    public QueryList withQueries(String[] queries) {
        this.queries = queries;
        return this;
    }
}